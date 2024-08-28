// src/MapComponent.js
import React, { useEffect, useRef, useState } from 'react';
import Feature from 'ol/Feature';
import ImageTile from 'ol/source/ImageTile';
import Map from 'ol/Map';
import Point from 'ol/geom/Point';
import Polyline from 'ol/format/Polyline';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';
import { Circle as CircleStyle, Fill, Icon, Stroke, Style } from 'ol/style';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { getVectorContext } from 'ol/render';
import { fromLonLat } from 'ol/proj';

const MapComponent = () => {
  const mapRef = useRef();
  const [map, setMap] = useState(null);
  const [routeLayer, setRouteLayer] = useState(null);
  const [destination, setDestination] = useState('');
  const [speed, setSpeed] = useState(1);
  const [animating, setAnimating] = useState(false);
  const positionRef = useRef(null);
  const lastTimeRef = useRef(null);
  const distanceRef = useRef(0);

  useEffect(() => {
    const key = 'DiKrgl7nPbnymRkuzYGO	';
    const attributions =
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ' +
      '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';

    const initialMap = new Map({
      target: mapRef.current,
      view: new View({
        center: fromLonLat([-50, 40]), // Default center
        zoom: 10,
        minZoom: 2,
        maxZoom: 19,
      }),
      layers: [
        new TileLayer({
          source: new ImageTile({
            attributions: attributions,
            url: `https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=${key}`,
            tileSize: 512,
          }),
        }),
      ],
    });

    setMap(initialMap);
  }, []);

  const fetchRoute = () => {
    if (!destination) return;

    // Assume you have a function to convert the destination into coordinates
    // e.g., using a geocoding API
    const destCoordinates = [/* longitude, latitude */];

    fetch('data/polyline/route.json').then((response) =>
      response.json().then((result) => {
        const polyline = result.routes[0].geometry;

        const route = new Polyline({
          factor: 1e6,
        }).readGeometry(polyline, {
          dataProjection: 'EPSG:4326',
          featureProjection: 'EPSG:3857',
        });

        const routeFeature = new Feature({
          type: 'route',
          geometry: route,
        });

        const startMarker = new Feature({
          type: 'icon',
          geometry: new Point(route.getFirstCoordinate()),
        });

        const endMarker = new Feature({
          type: 'icon',
          geometry: new Point(fromLonLat(destCoordinates)),
        });

        const position = startMarker.getGeometry().clone();
        positionRef.current = position;

        const geoMarker = new Feature({
          type: 'geoMarker',
          geometry: position,
        });

        const styles = {
          route: new Style({
            stroke: new Stroke({
              width: 6,
              color: [237, 212, 0, 0.8],
            }),
          }),
          icon: new Style({
            image: new Icon({
              anchor: [0.5, 1],
              src: 'data/icon.png',
            }),
          }),
          geoMarker: new Style({
            image: new CircleStyle({
              radius: 7,
              fill: new Fill({ color: 'black' }),
              stroke: new Stroke({
                color: 'white',
                width: 2,
              }),
            }),
          }),
        };

        const vectorLayer = new VectorLayer({
          source: new VectorSource({
            features: [routeFeature, geoMarker, startMarker, endMarker],
          }),
          style: (feature) => styles[feature.get('type')],
        });

        map.addLayer(vectorLayer);
        setRouteLayer(vectorLayer);
      })
    );
  };

  const startAnimation = () => {
    if (!routeLayer) return;

    setAnimating(true);
    lastTimeRef.current = Date.now();

    routeLayer.on('postrender', moveFeature);
  };

  const stopAnimation = () => {
    if (!routeLayer) return;

    setAnimating(false);
    routeLayer.un('postrender', moveFeature);
  };

  const moveFeature = (event) => {
    const currentSpeed = speed;
    const time = event.frameState.time;
    const elapsedTime = time - lastTimeRef.current;
    distanceRef.current = (distanceRef.current + (currentSpeed * elapsedTime) / 1e6) % 2;
    lastTimeRef.current = time;

    const route = routeLayer.getSource().getFeatures()[0].getGeometry();
    const currentCoordinate = route.getCoordinateAt(
      distanceRef.current > 1 ? 2 - distanceRef.current : distanceRef.current
    );
    positionRef.current.setCoordinates(currentCoordinate);
    const vectorContext = getVectorContext(event);
    vectorContext.setStyle(styles.geoMarker);
    vectorContext.drawGeometry(positionRef.current);

    map.render();
  };

  return (
    <div>
      <input
        type="text"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        placeholder="Enter destination"
      />
      <button onClick={fetchRoute}>Get Route</button>
      <br />
      <label>
        Speed:
        <input
          type="number"
          value={speed}
          onChange={(e) => setSpeed(e.target.value)}
        />
      </label>
      <button onClick={animating ? stopAnimation : startAnimation}>
        {animating ? 'Stop Animation' : 'Start Animation'}
      </button>
      <div ref={mapRef} style={{ width: '100%', height: '500px' }}></div>
    </div>
  );
};

export default MapComponent;
