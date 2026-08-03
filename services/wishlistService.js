import { getData, postData, deleteData } from './apiHelper';

export const getWishlist = async () => {
  return await getData('/wishlist');
};

export const addToWishlist = async (productId) => {
  return await postData('/wishlist', {
    productId,
  });
};

export const removeFromWishlist = async (productId) => {
  return await deleteData(`/wishlist/${productId}`);
};
