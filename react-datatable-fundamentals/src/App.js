import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ParentComp from './components/ParentComp';
import PortalDemo from './Portals/PortalDemo';
import ClickCounter from './HOC/ClickCounter';
import HoverCounter from './HOC/HoverCounter';
import UseStateHook from './hooks/UseStateHook';
import UseStateHookWithObject from './hooks/UseStateHookWithObject';
import UseStateHookWithArray from './hooks/UseStateHookWithArray';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <ParentComp/> */}
        {/* <PortalDemo/> */}

        {/* <ClickCounter name='Rejwanul Reja'/>
        <HoverCounter name='Rejwanul Reja'/> */}

        {/* <UseStateHook/> */}
        {/* <UseStateHookWithObject/> */}
        <UseStateHookWithArray/>

      </div>
    );
  }
}

export default App;
