import axios from 'axios';

export async function getUserData() {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_REACT_API_URL}/auth/user`,
      { withCredentials: true }
    );
    const data = res.data;
    console.log(data);
    return data;
  } catch {
    return undefined;
  }
}
