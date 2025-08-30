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
      date_applied: dateApplied
    });
    onJobAdded(newJob);
    setCompany("");
    setPosition("");
    setDateApplied(new Date().toISOString().split("T")[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={company} onChange={e => setCompany(e.target.value)} placeholder="Company" required />
      <input value={position} onChange={e => setPosition(e.target.value)} placeholder="Position" required />
      <select value={status} onChange={e => setStatus(e.target.value)}>
        <option value="applied">Applied</option>
        <option value="interview">Interview</option>
        <option value="offer">Offer</option>
        <option value="rejected">Rejected</option>
      </select>
      <input type="date" value={dateApplied} onChange={e => setDateApplied(e.target.value)} required />
      <button type="submit">Add Job</button>
    </form>
  );
};

export default JobForm;
