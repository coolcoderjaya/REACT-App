import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet' 
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
class App extends Component {
  render(){
    return (
      <div className="App">
        {/*<Counter />
        {/*<Message />
        {/*<Greet name = "Mayor" heroName = "Superman">
          <p>This is a children prop</p>
        </Greet>
        <Greet name = "Thomas" heroName = "Batman">
          <button>Click Here</button>
        </Greet>
        <Greet name = "Lilly" heroName = "Spiderman"/>
        <Welcome name = "Diana" heroName = "Wonder Woman"/>
        <Welcome name = "Robert" heroName = "Superman"/>
        <Welcome name = "Tiffiny" heroName = "Batman"/>
        <Hello />
        <FunctionClick />
        <ClassClick /
        <EventBind />
        <ParentComponent />
        <UserGreeting />*/}
        <NameList />
      </div>
    );
  } 
}

export default App;
