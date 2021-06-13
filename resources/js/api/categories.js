import server from './http';

export async function all(){
  let { data } = await server.get('/api/category');
  console.log(data)
  return data.categories
}
