import axios from 'axios';

const AUTH_API = axios.create({
  baseURL: 'http://localhost:5000/api/auth',
});

export const registerUser = (userData) => AUTH_API.post('/register', userData);
export const loginUser = (userData) => AUTH_API.post('/login', userData);