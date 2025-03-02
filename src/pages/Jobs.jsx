import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Jobs = () => {
  const jobsData = useLoaderData();
  console.log(jobsData);

  return (
    <div className="jobs">
      {jobsData.map((job) => {
        return (

            <Link to={job.id.toString()}>
              <h4>{job.title}</h4>
              <p>{job.location}</p>
            </Link>
        );
      })}
    </div>
  );
};

export default Jobs;

export const jobsLoader = async () => {
  const response = await fetch("http://localhost:5000/jobs");
  console.log(response);
  return response.json();
};
