import { postData, getData, putData, deleteData } from './index';

// ==========================
// USER AUTH & CRUD SERVICES
// ==========================

// SIGNUP
export const signUpUser = async (userData) => {
  // POST /users → creates a new user
  return await postData('users', userData);
};

// LOGIN
export const loginUser = async (loginData) => {
  // POST /auth/login → returns JWT token & user info
  return await postData('auth/login', loginData);
};

// GET ALL USERS
export const getUsers = async () => {
  return await getData('users');
};

// GET SINGLE USER
export const getUser = async (id) => {
  return await getData(`users/${id}`);
};

// UPDATE USER
export const updateUser = async (id, updatedData) => {
  return await putData(`users/${id}`, updatedData);
};

// DELETE USER
export const deleteUser = async (id) => {
  return await deleteData(`users/${id}`);
};
