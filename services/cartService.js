import { getData, postData, patchData, deleteData } from './apiHelper';

export const getCart = async () => {
  return await getData('/cart');
};

export const addToCart = async (productId, quantity = 1) => {
  return await postData('/cart/add', {
    productId,
    quantity,
  });
};

export const updateCartItem = async (productId, quantity) => {
  return await patchData(`/cart/${productId}`, {
    quantity,
  });
};

export const removeFromCart = async (productId) => {
  return await deleteData(`/cart/${productId}`);
};
