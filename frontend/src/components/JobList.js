import React from "react";

const JobList = ({ jobs }) => {
  const statusColor = {
    applied: "primary",
    interview: "warning",
    offer: "success",
    rejected: "danger"
  };

  return (
    <div>
      {jobs.map(job => (
        <div key={job.id} className="card mb-3">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="card-title">{job.position} at {job.company}</h5>
              <span className={`badge bg-${statusColor[job.status]}`}>{job.status}</span>
            </div>
            <p className="card-text"><small>Date Applied: {job.date_applied}</small></p>
            <div className="d-flex justify-content-end">
              <a href="#" className="btn btn-primary me-2"><i className="bi bi-pencil-square"></i></a>
              <a href="#" className="btn btn-danger"><i className="bi bi-trash"></i></a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobList;
