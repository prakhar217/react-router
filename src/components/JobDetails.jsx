import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const params = useParams()
    const loaderData = useLoaderData();
    console.log(loaderData)
  return <div>
    <h1>Job Details {params.id}</h1>
    <div>
        {loaderData[0].title}
    </div>
  </div>;
};

export const JobDetailsLoader = async ({params})=>{
    const {id} = params;

    const res = await fetch("http://localhost:5000/jobs?id=" + id);
    console.log(res)
    return res.json();
}

export default JobDetails;
