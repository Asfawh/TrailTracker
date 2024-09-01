import axios from 'axios';
const baseURL = 'http://localhost:8004/api/users/';

const http = axios.create({ baseURL });

async function callLoginReg(path, formData) {
  try {
    const response = await http.post(path, formData);
    return response.data;
  } catch (err) {
    throw err;
  }
}

export { callLoginReg };
