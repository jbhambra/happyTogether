import React, { Component } from 'react';

import './App.css';
import ChatBot from 'react-simple-chatbot';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const steps = [
  {
      id: '1',
      message: 'What is your name?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}, nice to meet you! How are you feeling now?',
      trigger: '4',
    },
    {
        id: '4',
        options: [
          { value: 1, label: '=)', trigger: '5' },
          { value: 2, label: '=(', trigger: '6' },
          { value: 3, label: '(ツ)_/¯', trigger: '7'},
          { value: 4, label: 'bla', trigger: '8' },

        ],
      },
      {
        id: '5',
        component: musicMessageFirst(),
        trigger: '9',
      },
      {
        id: '6',
         message: 'You need to listen this music: YYY',
        trigger: '9',
      },{
        id: '7',
         message: 'This is the music for you: https://www.youtube.com/watch?v=uFAWIKVThjA',
        trigger: '9',
      },
      {
        id: '8',
         message: 'bla: https://www.youtube.com/watch?v=uFAWIKVThjA',
        trigger: '9',
      }, 
 {
      id: '9',
      message: 'Do you want more?',
      trigger: '10',
    },
    {
        id: '10',
        options: [
          { value: 1, label: 'SURE!', trigger: '8' },
          { value: 2, label: 'Nops', end: true },
        ],
      },
];

function musicMessageFirst() {
  return (<span><a href="https://youtu.be/VBmMU_iwe6U" target="_blank">Who run the world?</a></span>);
}
function musicMessageSecond() {
  return (<span><a href="https://youtu.be/2EwViQxSJJQ" target="_blank">Guess who is irreplaceble?</a></span>);
}
function musicMessageThird() {
  return (<span><a href="https://www.google.com" target="_blank">You may like this!</a></span>);
}
function musicMessageFour() {
  return (<span><a href="https://www.google.com" target="_blank">You may like this!</a></span>);
}

class App extends Component {
  render() {
    return (
      <div >
      <Wrapper>
      <div>
        <ChatBot steps={steps} />
      </div>
      </Wrapper>
    </div>
    );
}

}
export default App;