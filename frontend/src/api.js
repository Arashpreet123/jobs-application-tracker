const API_URL = "http://127.0.0.1:8000/api/jobs/";

export const getJobs = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const createJob = async (job) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(job),
  });
  return response.json();
};

export const updateJob = async(id, updatedJob) => {
    const response = await fetch(`${API_URL}${id}/`, {
        method: "PUT",
        headers: {"Content-Type" : "application/json"},
        body : JSON.stringify(updateJob),
    });
    return response.json()
}
