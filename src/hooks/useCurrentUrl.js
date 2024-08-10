import { useState, useEffect } from 'react';

const useCurrentUrl = () => {
    const [url, setUrl] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setUrl(window.location.href);
        }
    }, []);

    return url;
};

export default useCurrentUrl;