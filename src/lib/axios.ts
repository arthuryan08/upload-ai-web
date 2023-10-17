import axios from 'axios'

export const api = axios.create({
  baseURL: 'arthur-upload-ai-api.vercel.app'
})