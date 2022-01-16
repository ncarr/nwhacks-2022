import {getAccessToken, handleLogin, withApiAuthRequired} from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function messages(req, res) {
    // If your Access Token is expired and you have a Refresh Token
    // `getAccessToken` will fetch you a new one using the `refresh_token` grant

    const { accessToken } = await getAccessToken(req, res, {
        scopes: ['read:messages']
    });
    const response = await fetch('http://localhost:3010/api/private', {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    const messages = await response.json();
    res.status(200).json(messages);
});