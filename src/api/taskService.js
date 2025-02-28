import axios from "axios";

const API_BASE_URL = "http://localhost:8080"; // Adjust if needed

export const getAllTasks = () => axios.get(`${API_BASE_URL}/list`);
export const getCompletedTasks = () => axios.get(`${API_BASE_URL}/completed`);
export const getUncompletedTasks = () => axios.get(`${API_BASE_URL}/uncompleted`);
export const getTaskById = (taskId) => axios.get(`${API_BASE_URL}/${taskId}`);
export const saveTask = (task) => axios.post(`${API_BASE_URL}/api`, task);
export const updateTask = (taskId, task) => axios.put(`${API_BASE_URL}/${taskId}`, task);
export const deleteTask = (taskId) => axios.delete(`${API_BASE_URL}/${taskId}`);
