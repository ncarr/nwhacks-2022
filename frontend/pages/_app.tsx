import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Auth0Provider } from '@auth0/auth0-react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Auth0Provider
        domain={'dev-zhlpfa8k.us.auth0.com'}
        clientId={'ibmjwLRwFXmHn9m4ibe6YXavjfSUdAt4'}
        redirectUri={'http://localhost:3000/'}>
        <Component {...pageProps} />
      </Auth0Provider>)
}

export default MyApp
