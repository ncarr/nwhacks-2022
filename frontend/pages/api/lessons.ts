import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';
import { apiBaseUrl, find } from '../../utils/endpoint';

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        return find('/api/lessons')(req, res);
    } else if (req.method === 'POST') {
        return withApiAuthRequired(async (req, res) => {
            const { accessToken, user: { sub: authorId } } = getSession(req, res)!;
            const response = await fetch(new URL('/api/lessons', apiBaseUrl).href, {
                method: 'POST',
                body: JSON.stringify({
                    authorId,
                    lesson: req.body
                }),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`
                }
            });
            const messages = await response.json();
            res.status(200).json(messages);
        })(req, res);
    }
};