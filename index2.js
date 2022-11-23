import React from "react";
import  ReactDOM  from "react-dom";
import './index.css';
import SigninPage from './components/signinPage';
import {Auth0Provider} from '@auth0/auth0-react';



const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(

    <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
 >
   <SigninPage/>
    

  document.getElementById('root')
  </Auth0Provider>
);