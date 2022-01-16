import {getAccessToken, handleLogin, withApiAuthRequired} from '@auth0/nextjs-auth0';
import {log} from "util";

export default withApiAuthRequired(async function messages(req, res) {
    // If your Access Token is expired and you have a Refresh Token
    // `getAccessToken` will fetch you a new one using the `refresh_token` grant

    var options = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: '{"client_id":"5Zc0qLubPf08TBBPq8mv6eaosYgif99M","client_secret":"1ZR5ldAWsEmDANRPtX3W6GjBHn2mgkNz_RkUQeY27YWN2ZOyzXdHwz7TLSlYg3CH","audience":"https://educatr/api","grant_type":"client_credentials"}' };

    const { accessToken } = await fetch('https://dev-zhlpfa8k.us.auth0.com/oauth/token', options);

    console.log(accessToken)
    const response = await fetch('http://localhost:3010/api/private', {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    const messages = await response.json();
    res.status(200).json(messages);
});