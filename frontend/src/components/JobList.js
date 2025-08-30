import React, { useEffect, useState } from "react";
import { getJobs } from "../api";

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs().then(data => setJobs(data));
  }, []);

  return (
    <div>
      <h2>Job Applications</h2>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            {job.position} at {job.company} - {job.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
