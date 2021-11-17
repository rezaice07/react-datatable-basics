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
import UseEffectHook from './hooks/UseEffectHook';
import DidMountUpadate from './LifeCycles/DidMountUpadate';
import UseEffectForHttps from './hooks/UseEffectForHttps';

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
        {/* <UseStateHookWithArray/> */}

        {/* <UseEffectHook/> */}
        {/* <DidMountUpadate /> */}

        <UseEffectForHttps />

      </div>
    );
  }
}

export default App;
