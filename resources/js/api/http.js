import axios from 'axios'

const APP_URL = process.env.MIX_APP_URL

const instance = axios.create({
  baseURL: APP_URL,
  timeout: 10000
});

export default instance
