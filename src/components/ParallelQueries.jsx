import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const ParallelQueries = () => {
    const fetchSuperHero = () => {
        return axios.get('http://localhost:4000/superheros')
    }
    const fetchEmployee = () => {
        return axios.get('http://localhost:4000/employee')
    }

    useQuery('super-parallel', fetchSuperHero)
    useQuery('employee-parallel', fetchEmployee)

    return <div>ParallelQueries</div>;
};

export default ParallelQueries;
