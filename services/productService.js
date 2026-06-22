import { getData, postData } from './apiHelper';

export const createProduct = async (data) => {
  return await postData('/products/upload', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const getProducts = async (params = {}) => {
  return await getData('/products', params);
};

export const getProductBySlug = async (slug) => {
  return await getData(`/products/${slug}`);
};

export const getRelatedProducts = async (slug) => {
  return await getData(`/products/related/${slug}`);
};
