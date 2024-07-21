// services/jobService.ts
import axios from 'axios';

const API_URL = 'http://localhost:8000/jobs';

export const createJob = async () => {
    const response = await axios.post(API_URL);
    return response.data;
};

export const fetchJobs = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const fetchJob = async (id: string) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};
