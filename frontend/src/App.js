import React, { useState } from "react";
import JobList from "./components/JobList";
import JobForm from "./components/JobForm";

function App() {
  const [jobsUpdated, setJobsUpdated] = useState(false);

  return (
    <div>
      <h1>Job Tracker</h1>
      <JobForm onJobAdded={() => setJobsUpdated(!jobsUpdated)} />
      <JobList key={jobsUpdated} />
    </div>
  );
}

export default App;
