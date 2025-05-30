import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Auth0Provider
    domain="ashu-tosh-pandey.us.auth0.com"
    clientId="vVODBuqVceIB1Q3U3QunssSDN4pw4Xdj"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  cacheLocation="localstorage"
  useRefreshTokens={true}
  >
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Auth0Provider>
    
    
  </StrictMode>,
)
