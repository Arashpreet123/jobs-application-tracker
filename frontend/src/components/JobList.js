import React from "react";

const JobList = ({ jobs }) => {
  return (
    <div>
      {jobs.map(job => (
        <div key={job.id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{job.position} at {job.company}</h5>
            <p className="card-text">Status: {job.status}</p>
            <p className="card-text"><small>Date Applied: {job.date_applied}</small></p>
            <a href="#"><i className="bi bi-pencil-square"></i></a>
            <a href="#"><i className="bi bi-trash"></i></a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobList;
