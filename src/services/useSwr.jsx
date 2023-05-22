import { useEffect, useState } from 'react';
import callApi from './callApi';

const useSwr = (url) => {

    const [value, setValue] = useState();
    const mutate = () => {
        callApi(url, 'GET').then(res => {
            setValue(res)
        })
    }
    useEffect(() => {
        mutate()
        // eslint-disable-next-line
    }, [url]);
    return {
        data: value,
        mutate
    }
}

export default useSwr