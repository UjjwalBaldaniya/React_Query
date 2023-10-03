import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const RqSuperHero = () => {
    const query = useQuery('super', () => {
        return axios.get('http://localhost:4000/superheros')
    })
    console.log(query);
    const { isLoading, data } = query

    if (isLoading) {
        return <h1>Loading ...</h1>
    }

    return (
        <>
            <div>
                <h1>Super Hero Page</h1>
                {
                    data?.data.map((element, index) => (
                        <h3 key={index}>{index + 1}. {element.title}</h3>
                    ))
                }
            </div>
        </>
    )
};

export default RqSuperHero;
