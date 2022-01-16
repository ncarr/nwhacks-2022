// pages/api/auth/[...auth0].js
import { handleAuth, handleLogin, handleCallback } from '@auth0/nextjs-auth0';

const afterCallback = async (req, res, session, state) => {
    await fetch('http://localhost:3010/api/users', {
        method: 'PATCH',
        body: JSON.stringify({
            id: session.user.sub,
            firstName: session.user.given_name,
            lastName: session.user.family_name,
            userEmail: session.user.email
        }),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${session.accessToken}`
        }
    });
    return session
}

export default handleAuth({
    async login(req, res) {
        try {
            await handleLogin(req, res, {
                authorizationParams: {
                    audience: 'https://educatr/api', // or AUTH0_AUDIENCE
                    // Add the `offline_access` scope to also get a Refresh Token
                    scope: 'openid profile email read:messages' // or AUTH0_SCOPE
                }
            });
        } catch (error) {
            res.status(error.status || 400).end(error.message);
        }
    },
    async callback(req, res) {
        try {
            await handleCallback(req, res, { afterCallback });
          } catch (error) {
            res.status(error.status || 500).end(error.message);
          }
    }
});