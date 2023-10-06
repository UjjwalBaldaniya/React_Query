import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const DependentQueries = ({ email }) => {
  const fetchUserData = (email) => {
    return axios.get(`http://localhost:4000/user/${email}`)
  }

  const fetchUserAddress = (name) => {
    return axios.get(`http://localhost:4000/details/${name}`)
  }

  const { data: user } = useQuery(["user", email], () => fetchUserData(email))
  let name = user?.data.name

  const { data: details } = useQuery(["details", name], () => fetchUserAddress(name), { enabled: !!name })
  console.log(details?.data.address);

  return <div>DependentQueries</div>;
};

export default DependentQueries;
