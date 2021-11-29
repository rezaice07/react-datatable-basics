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

import firebase from './Firebase';
// import 'firebase/messaging';

import { onMessageListener } from "./Firebase";
import ImageLazyLoading from './LazyLoadings/ImageLazyLoading';
import ImageLazyloadingFn from './LazyLoadings/ImageLazyloadingFn';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  notify = () => toast("Wow so easy!");

  componentDidMount = () => {    
    const messaging = firebase.messaging();

    messaging.getToken({ vapidKey: 'BEzMrv0u_QBCHDaPTYYrB_A_efz73fxykSTAGYbMylycHFNIijCaa48XO1GFDSZ4c9ojR5Dv_OLHqdvKrUu2yCw' })
    .then((currentToken) => {
      if (currentToken) {
        console.log(`currentToken => ${currentToken}`);

        // Send the token to your server and update the UI if necessary
        // ...
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
        // ...
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // ...
    });

    /*
    messaging.requestPermission()
      .then(() => {
        return messaging.getToken();
      })
      .then(token => {
        console.log(`token => ${token}`);
      })
      .catch(error => {
        console.log(error)
      })

      */
  }


  render() {
    return (
      <div className="App">
        {/* <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        /> */}
        {/* <button onClick={this.notify}>Notify!</button> */}
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

        {/* <ImageLazyLoading/> */}

        <ImageLazyloadingFn/>



      </div>
    );
  }
}

export default App;


/*

export const getToken = (setTokenFound) => {
  return messaging.getToken({vapidKey: 'BEzMrv0u_QBCHDaPTYYrB_A_efz73fxykSTAGYbMylycHFNIijCaa48XO1GFDSZ4c9ojR5Dv_OLHqdvKrUu2yCw'}).then((currentToken) => {
    if (currentToken) {
      console.log('current token for client: ', currentToken);
      setTokenFound(true);
      // Track the token -> client mapping, by sending to backend server
      // show on the UI that permission is secured
    } else {
      console.log('No registration token available. Request permission to generate one.');
      setTokenFound(false);
      // shows on the UI that permission is required
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // catch error while creating client token
  });
}

*/