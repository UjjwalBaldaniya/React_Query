import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const RqIndividualData = () => {
    const { id } = useParams()

    const fetchSuperHero = () => {
        return axios.get(`http://localhost:4000/superaheros/${id}`)
    }

    const { isLoading, data, isError, error } = useQuery('individual', fetchSuperHero)

    if (isLoading) return 'Loading...'
    if (isError) return error.message

    return (
        <>
            <div>
                <h1>Individual Hero</h1>
                <div>
                    <p>1. {data.data.title}</p>
                </div>
            </div>
        </>
    )
};

export default RqIndividualData;
