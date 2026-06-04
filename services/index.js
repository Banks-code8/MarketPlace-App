import axios from 'axios';

//GET DATA METHOD
export const getData = async (url) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${url}`);
  if (!res.ok) {
    console.log(res);
    return {
      success: false,
      data: null,
      msg: 'Not Found',
    };
  }
  return res.json();
};

//GET DATA FROM ALTERNATIVE API
export const getApiData = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    return {
      success: false,
      data: 1,
    };
  }
  return res.json();
};

// POST METHOD:
export const postData = async (url, data) => {
  try {
    const link = `${process.env.NEXT_PUBLIC_API_URL}/${url}`;
    const response = await axios.post(link, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data; // parses JSON response into native JavaScript objects
  } catch (error) {
    return {
      success: false,
      message: 'Network error occurred',
    };
  }
};
// PUT METHOD:
export const putData = async (url, data) => {
  const userExist = localStorage.getItem('lingoUser');
  const user = JSON.parse(userExist);
  let xid = user?._id;
  const link = `${process.env.NEXT_PUBLIC_API_URL}${url}?xid=${xid}`;
  const response = await fetch(link, {
    method: 'PUT', // *GET, POST, PUT, DELETE, etc...
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
};

//POST METHOD WITH FILE
export const postDataWithFile = async (url, data) => {
  const link = `${process.env.NEXT_PUBLIC_API_URL}/${url}`;
  console.log(link);
  try {
    const res = await axios.post(link, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return res.data;
  } catch (error) {
    return {
      success: false,
      message: 'Network error occurred',
    };
  }
};
export const deleteData = async (url) => {
  try {
    const link = `${process.env.NEXT_PUBLIC_API_URL}/${url}`;
    const res = await fetch(link, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    return res.json();
  } catch (error) {
    return {
      success: false,
      message: 'Network error occurred',
    };
  }
};
