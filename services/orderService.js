import { getData, postData, patchData } from './apiHelper';

export const createOrder = async (data) => {
  return await postData('/orders', data);
};

export const getMyOrders = async () => {
  return await getData('/orders');
};

export const getOrderById = async (id) => {
  return await getData(`/orders/${id}`);
};

export const updateOrderStatus = async (id, status) => {
  return await patchData(`/orders/${id}/status`, {
    status,
  });
};
