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
import UserAutoComplete from './autocomplete/UserAutoComplete';
import BoostrapModal from './boostrap-modal/BoostrapModal';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  notify = () => toast("Wow so easy!");
  render() {
    return (
      <div className="App">        
        <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
        <button onClick={this.notify}>Notify!</button>
        {/* <ParentComp/> */}
        {/* <PortalDemo/> */}

        {/* <ClickCounter name='Rejwanul Reja'/>
        <HoverCounter name='Rejwanul Reja'/> */}

        {/* <UseStateHook/> */}
        {/* <UseStateHookWithObject/> */}
        {/* <UseStateHookWithArray/> */}

        {/* <UseEffectHook/> */}
        {/* <DidMountUpadate /> */}

        {/* <UseEffectForHttps /> */}

        {/* <UserAutoComplete/> */}

        {/* <BoostrapModal/> */}

      </div>
    );
  }
}

export default App;
