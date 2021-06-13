import server from './http'

export async function all(){
  let { data } = await server.get('/api/category')
  return data.categories
}
