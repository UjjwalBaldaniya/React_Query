import axios from "axios";
import React, { useEffect, useState } from "react";

const SuperHero = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    const getApiData = async () => {
        try {
            const res = await axios.get('http://localhost:4000/superheros')
            console.log(res.data);
            setData(res.data)
            setIsLoading(false)
        } catch (error) {
            console.log(error);
            setError(error.message)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getApiData()
    }, [])

    if (isLoading) {
        return <h1>Loading ...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <>
            <div>
                <h1>Super Hero Page</h1>
                {
                    data.map((element, index) => (
                        <h3 key={index}>{index + 1}. {element.title}</h3>
                    ))
                }
            </div>
        </>
    )
};

export default SuperHero;
