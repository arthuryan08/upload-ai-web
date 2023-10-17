import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://arthur-upload-ai-api.vercel.app'
})