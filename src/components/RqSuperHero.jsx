import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useSuperHeroData } from "../hooks/useSuperHeroData";

const RqSuperHero = () => {
    const [inputField, setInputField] = useState({
        title: ""
    });


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

    const { mutate } = useSuperHeroData()

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputField({
            ...inputField,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        // debugger
        e.preventDefault()
        // console.log(inputField);
        mutate(inputField)
    }

    if (isLoading || isFetching) return 'Loading...'
    if (isError) return error.message

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Title :- </label>
                    <input type="text" placeholder="name" name="title" value={inputField.inputField} onChange={handleChange} />
                    <button type="submit">Add Data</button>
                </form>
                <h1>Super Hero Page</h1>
                <button onClick={refetch}>Fetch Data</button>
                {data?.data.map((element, index) => (
                    <div key={index}>
                        <Link to={`/rq-super-hero/${element.id}`}>{index + 1}. {element.title}</Link>
                    </div>
                ))}
            </div>
        </>
    )
};

export default RqSuperHero;
