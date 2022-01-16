import { useAuth0 } from '@auth0/auth0-react';
import useSWR from 'swr';

export default function Messages() {
    const {
        user,
        isAuthenticated,
        isLoading,
        getAccessTokenSilently,
    } = useAuth0();

    const { data, error } = useSWR(
        isLoading || !isAuthenticated ? null : '/api/private-scoped',
        async (url) => {
            const accessToken = await getAccessTokenSilently({
                audience: 'https://educatr/api',
                scope: 'read:messages',
            });
            const res = await fetch(url, {
                headers: {
                    authorization: `Bearer ${accessToken}`,
                },
            });
            return res.json();
        }
    );

    if (isLoading) {
        return <div>Loading the message...</div>;
    }

    if (!isAuthenticated) {
        return <div>You must first sign in to access this message.</div>;
    }

    if (error) {
        return <div>There was an error loading the message.</div>;
    }

    if (!data) {
        return (
            <div>
                <h1>Message for {user.email}</h1>
                <div>Loading the message ...</div>
            </div>
        );
    }
    return (
        <div>
            <h1>Message for {user.email}</h1>
            <div>This message is a total of {data.length} characters...</div>
        </div>
    );
}