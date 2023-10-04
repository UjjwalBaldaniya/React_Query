import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const RqSuperHero = () => {
    const fetchSuperHero = () => {
        return axios.get('http://localhost:4000/superheros')
    }

    const onSuccess = () => {
        console.log("On Success");
    }
    const onError = () => {
        console.log("On Error");
    }

    const { isLoading, data, isError, error, refetch, isFetching } = useQuery('super', fetchSuperHero, { onSuccess, onError })

    if (isLoading || isFetching) return 'Loading...'
    if (isError) return error.message

    return (
        <>
            <div>
                <h1>Super Hero Page</h1>
                <button onClick={refetch}>Fetch Data</button>
                {data?.data.map((element, index) => (
                    <div key={index}>
                        <Link to={`/rqsuperhero/${element.id}`}>{index + 1}. {element.title}</Link>
                    </div>
                ))}
            </div>
        </>
    )
};

export default RqSuperHero;
