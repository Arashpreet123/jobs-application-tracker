import React, { useEffect, useState } from "react";
import { getJobs } from "./api";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import AppNavbar from "./components/Navbar";
import EditJobForm from "./components/EditJobForm";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const data = await getJobs();
      setJobs(data);
    };
    fetchJobs();
  }, []);

  const handleJobAdded = (job) => {
    setJobs([...jobs, job]);
  };

  return (
    <>
      <AppNavbar />
      <div className="container mt-4">
        <JobForm onJobAdded={handleJobAdded} />
        <JobList jobs={jobs} />
      </div>
    </>
  );
}

export default App;
