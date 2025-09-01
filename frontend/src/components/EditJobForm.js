import React, { useState } from "react";
import { updateJob } from "../api";

const EditJobForm = ({ job, onJobUpdated }) => {
  const [company, setCompany] = useState(job.company);
  const [position, setPosition] = useState(job.position);
  const [status, setStatus] = useState(job.status);
  const [dateApplied, setDateApplied] = useState(job.date_applied);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedJob = await updateJob(job.id, {
      company,
      position,
      status,
      date_applied: dateApplied,
    });
    onJobUpdated(updatedJob);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
      <input
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Company"
        required
      />
      <input
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        placeholder="Position"
        required
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="applied">Applied</option>
        <option value="interview">Interview</option>
        <option value="offer">Offer</option>
        <option value="rejected">Rejected</option>
      </select>
      <input
        type="date"
        value={dateApplied}
        onChange={(e) => setDateApplied(e.target.value)}
        required
      />
      <button type="submit" className="btn btn-primary mt-2">
        Save Changes
      </button>
    </form>
  );
};

export default EditJobForm;
