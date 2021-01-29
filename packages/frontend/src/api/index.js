import axios from 'axios';

const apiInstance = axios.create({
  baseURL: 'http://localhost:5000/api'
})

export const createTask = data => apiInstance.post('/tasks', data)
export const getTasks = data => apiInstance.get('/tasks', data)