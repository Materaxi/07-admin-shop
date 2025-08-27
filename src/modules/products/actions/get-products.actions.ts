import { tesloApi } from '@/api/tesloApi';

export const getProducts = async (page: number = 1, limit: number = 10) => {
  try {
    // const {data}= await tesloApi.get(`/products?page=${page}&limit=${limit}`);
    const { data } = await tesloApi.get('/products');
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error('Error al obtener los productos');
  }
};
