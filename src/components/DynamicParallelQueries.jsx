import axios from "axios";
import React from "react";
import { useQueries } from "react-query";

const DynamicParallelQueries = ({ heroId }) => {
    console.log(heroId);

    const fetchSuperHero = (id) => {
        return axios.get(`http://localhost:4000/superheros/${id}`)
    }

    const data = useQueries(
        heroId.map((id) => {
            return {
                queryKey: ['super-id', id],
                queryFn: () => fetchSuperHero(id)
            }
        })
    )
    console.log(data);

    return <div>DynamicParallelQueries</div>;
};

export default DynamicParallelQueries;
