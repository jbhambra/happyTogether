import React, { Component } from 'react';

import dogpic from './resources/doggo.jpeg'
import './App.css';
import ChatBot from 'react-simple-chatbot';
import styled from 'styled-components';

const theme = styled.div`
  background: '#f8faf4',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '55px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
`;

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
          { value: 1, label: 'Amazing! =)', trigger: '5' },
          { value: 2, label: 'Sad =(', trigger: '6' },
          { value: 3, label: 'I dont know', trigger: '7' },
        ],
      },
      {
        id: '5',
        message: 'You need to listen this music: XXX',
        end: true,
      },
      {
        id: '6',
         message: 'You need to listen this music: YYY',
        end: true,
      },{
        id: '7',
         message: 'This is the music for you: zzz',
        end: true,
      }
];

class Hackers extends Component {
  render() {
    return (
      <div>
      <p>{this.props.hackers}</p>
      <button onClick={this.props.clickHandler}>+1</button>
      </div>
      );
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      hackers: 999,
    }
  }

buttonClick = (event) => {
  this.setState({
    hackers: this.state.hackers + 1,
  });
}


  render() {
    return (
    <div>
    <Hackers
    hackers = {this.state.hackers}
    clickHandler = {this.buttonClick}
    />
    <styled theme={theme}>
    <div>
    <Wrapper>
    <div>
      <ChatBot steps={steps} />
      </div>
      </Wrapper>
      </div>
    </styled>
    </div>
    );
  }
}

export default App;
