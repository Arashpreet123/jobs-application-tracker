import React, { useState } from "react";
import { createJob } from "../api";

const JobForm = ({ onJobAdded }) => {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [status, setStatus] = useState("applied");
  const [dateApplied, setDateApplied] = useState(new Date().toISOString().split("T")[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newJob = await createJob({
      company,
      position,
      status,
      date_applied: dateApplied,
    });
    onJobAdded(newJob);
    setCompany("");
    setPosition("");
    setDateApplied(new Date().toISOString().split("T")[0]);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm mb-4">
      <div className="mb-3">
        <input
          className="form-control"
          value={company}
          onChange={e => setCompany(e.target.value)}
          placeholder="Company"
          required
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          value={position}
          onChange={e => setPosition(e.target.value)}
          placeholder="Position"
          required
        />
      </div>
      <div className="mb-3">
        <select
          className="form-select"
          value={status}
          onChange={e => setStatus(e.target.value)}
        >
          <option value="applied">Applied</option>
          <option value="interview">Interview</option>
          <option value="offer">Offer</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>
      <div className="mb-3">
        <input
          type="date"
          className="form-control"
          value={dateApplied}
          onChange={e => setDateApplied(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Job</button>
    </form>
  );
};

export default JobForm;
