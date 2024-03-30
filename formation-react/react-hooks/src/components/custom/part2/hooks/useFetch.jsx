import {useDebugValue, useEffect, useState } from "react";
import {fakeUsersGenerator} from "../../../../data/users.js";

const useFetch = (url) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useDebugValue(url)

    // const fetchData = async () => {
    //
    //     try {
    //         const response = await fetch(url)
    //         const json = await response.json()
    //
    //         setData(json)
    //         setLoading(false)
    //
    //     } catch (e) {
    //         console.log(e.message)
    //     }
    //
    //     // fetch(url)
    //     //     .then(response => response.json())
    //     //     .then(json => {
    //     //         setData(json)
    //     //         setLoading(false)
    //     //     })
    //     //     .catch(error => console.log(error.message))
    // }

    useEffect(() => {

            //fetchData()
            const users = fakeUsersGenerator()

            setData(users)
            setLoading(false)

    }, [url])

    return {data: data, loading: loading}

}

export default useFetch
