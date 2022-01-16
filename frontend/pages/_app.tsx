import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
  );
}

export default MyApp

// The authentication state exposed by UserProvider can be accessed in any component using the useUser() hook.
// Example code for a profile page:
// import React from 'react';
// import { useUser } from '@auth0/nextjs-auth0';
//
// export default function Profile() {
//     const { user, error, isLoading } = useUser();
//
//     if (isLoading) return <div>Loading...</div>;
//     if (error) return <div>{error.message}</div>;
//
//     return (
//         user && (
//             <div>
//                 <img src={user.picture} alt={user.name} />
//                 <h2>{user.name}</h2>
//                 <p>{user.email}</p>
//             </div>
//         )
//     );
// }