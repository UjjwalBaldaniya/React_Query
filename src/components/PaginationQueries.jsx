import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";

const PaginationQueries = () => {
    const [pageNumber, setPageNumber] = useState(1);

    const fetchColorData = (pageNumber) => {
        return axios.get(`http://localhost:4000/colors?_limit=1&_page=${pageNumber}`)
    }

    const { data, isLoading, isError, error, isFetching } = useQuery(['color', pageNumber], () => fetchColorData(pageNumber), { keepPreviousData: true })

    if (isLoading) return "Loading..."
    if (isError) return error.message

    return (
        <>
            <div>
                {data?.data.map((element, index) => (
                    <div key={index}>
                        <h2>{element.id}. {element.color}</h2>
                        <br />
                    </div>
                ))}
                <button onClick={() => setPageNumber(pageNumber - 1)} disabled={pageNumber === 1}>Previous</button>
                <button onClick={() => setPageNumber(pageNumber + 1)} disabled={pageNumber === 9}>Next</button>
                {isFetching && "Loading ..."}
            </div>
        </>
    )
};

export default PaginationQueries;
