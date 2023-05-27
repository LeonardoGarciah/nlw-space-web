import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3600',
  headers: {
    'X-Device-Type': 'web',
  },
})
