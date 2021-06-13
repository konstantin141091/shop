import server from './http'
import axios from "axios"

export async function all(credentials){
  await axios.get('/sanctum/csrf-cookie')
  let { data } = await server.post('/api/basket', credentials)
  return data
}
