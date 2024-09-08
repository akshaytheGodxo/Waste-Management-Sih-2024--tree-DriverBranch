import React from 'react';
import ChatBot from 'react-chatbotify';
import { Segment, Header } from 'semantic-ui-react';

const Chat = () => {
  const steps = [
    {
      id: 'Greet',
      message: 'Hello, World',
      trigger: 'Ask Name' 
    },
    {
      id: 'Ask Name',
      message: 'What is your name',
      trigger: 'waiting1'
    },
    {
      id: 'waiting1',
      user: true,
      trigger: 'Name'
    },
    {
      id: 'Name',
      message: 'Hi {previousValue}, Please select your issue',
      trigger: 'issues',
    },
    {
      id: 'issues',
      options: [
        {value: 'React', label: 'React', trigger: 'React'},
        {value: 'Angular', label: 'Angular', trigger: 'Angular'}
      ]
    },
    {
      id: 'React',
      message: 'React is a JavaScript library for building user interfaces.',
      end: true
    },
    {
      id: 'Angular',
      message: 'Thanks for telling your issue',
      end: true
    }
  ];

  return (
    <>
      <Segment floated='right'>
        <Header as='h2'>My Custom Chatbot</Header> {/* Add this line to set the chatbot's name */}
        <ChatBot steps={steps}/>
      </Segment> 
    </>
  );
}

export default Chat;
