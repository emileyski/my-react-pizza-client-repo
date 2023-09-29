import axios from 'axios';

const API_URL = 'https://react-fast-pizza-api.onrender.com/api';

export async function getMenu() {
  const res = await fetch(`${import.meta.env.VITE_REACT_API_URL}/menu`);
  if (!res.ok) throw Error('Failed getting menu');

  const data = await res.json();
  return data;
}

export async function getPizzaById(id) {
  const res = await fetch(`${import.meta.env.VITE_REACT_API_URL}/menu/${id}`);
  if (!res.ok) throw Error('Failed getting pizza');

  const data = await res.json();
  return data;
}

export async function getOrder(id) {
  const res = await axios.get(
    `${import.meta.env.VITE_REACT_API_URL}/order/${id}`
  );
  // const res = await fetch(`${import.meta.env.VITE_REACT_API_URL}/order/${id}`);

  if (res.status !== 200) throw Error();
  return res.data;
}

export async function createOrder(newOrder) {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_REACT_API_URL}/order`,
      newOrder,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );

    if (res.status !== 200) throw Error();
    return res.data;
  } catch {
    throw Error('Failed creating your order');
  }
}

export async function updateOrder(id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updateObj),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw Error();
    // We don't need the data, so we don't return anything
  } catch {
    throw Error('Failed updating your order');
  }
}

export async function getAllUserOrders() {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_REACT_API_URL}/order/my`,
      { withCredentials: true }
    );
    console.log(res);
    if (res.status !== 200) throw Error();
    return res.data;
  } catch {
    throw Error('Failed getting your orders');
  }
}
