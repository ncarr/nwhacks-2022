import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

export const apiBaseUrl = 'http://localhost:3010'

export const authenticatedFind = (uri: string) => withApiAuthRequired(async function messages(req: NextApiRequest, res: NextApiResponse) {
    // If your Access Token is expired and you have a Refresh Token
    // `getAccessToken` will fetch you a new one using the `refresh_token` grant

    const { accessToken } = await getAccessToken(req, res, {
        scopes: ['read:messages']
    });
    const response = await fetch(new URL(uri, process.env.AUTH0_BASE_URL).href, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    const messages = await response.json();
    res.status(200).json(messages);
});

export const find = (uri: string) => async function messages(req: NextApiRequest, res: NextApiResponse) {
    const response = await fetch(new URL(uri, apiBaseUrl).href);
    const messages = await response.json();
    res.status(200).json(messages);
};

export const findOne = (uri: string) => async function messages(req: NextApiRequest, res: NextApiResponse) {
    const response = await fetch(new URL(`${uri}/${req.query.id}`, apiBaseUrl).href);
    const messages = await response.json();
    res.status(200).json(messages);
};