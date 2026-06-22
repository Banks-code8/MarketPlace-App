import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getData = async (url, params = {}, config = {}) => {
  try {
    const res = await axios.get(`${API_URL}${url}`, {
      params,
      withCredentials: true,
      ...config,
    });

    return {
      success: true,
      data: res.data,
      message: res.data?.message || null,
    };
  } catch (error) {
    return {
      success: false,
      data: null,
      message: error.response?.data?.message || 'Request failed',
      status: error.response?.status,
    };
  }
};

export const postData = async (url, body = {}, config = {}) => {
  try {
    const res = await axios.post(`${API_URL}${url}`, body, {
      withCredentials: true,
      ...config,
    });

    return {
      success: true,
      data: res.data,
      message: res.data?.message || null,
    };
  } catch (error) {
    return {
      success: false,
      data: null,
      message: error.response?.data?.message || 'Request failed',
      status: error.response?.status,
    };
  }
};
