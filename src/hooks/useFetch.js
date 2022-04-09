import { useState, useEffect } from 'react'
import { getURL } from '../util/utils';

function useFetch(url)
{
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(getURL(url))
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log("data from " + getURL(url))
            setData(data)
        })
    }, [url])

    return data;

}

export default useFetch