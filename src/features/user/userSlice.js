import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAddress } from '../../services/apiGeocoding';
import axios from 'axios';

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export const fetchAddress = createAsyncThunk(
  'user/fetchAddress',
  async function () {
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    return { position, address };
  }
);

export const fetchUserData = createAsyncThunk(
  'user/fetchUserData',
  async function () {
    const res = await axios.get(
      `${import.meta.env.VITE_REACT_API_URL}/auth/user`,
      { withCredentials: true }
    );
    const data = res.data;

    // console.log(data);

    return data;
  }
);

const initialState = {
  username: '',
  email: '',
  isLoggedIn: false,
  status: 'idle',
  position: {},
  address: '',
  error: '',
  picture: '',
};

const userSlice = createSlice({
  userData: null,
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action) {
      state.fullname = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAddress.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = 'idle';
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      })
      .addCase(fetchUserData.pending, (state, action) => {
        state.status = 'loading'; // Можете добавить статус 'loading' для fetchUserData
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.fullname = action.payload.fullname;
        state.picture = action.payload.photoLink;
        state.email = action.payload.email;
        state.isLoggedIn = true; // Установите состояние isLoggedIn в true после успешной авторизации
        state.status = 'idle';
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      }),
  //нужно написать логику работы с fetchUserData
});

export const getIsLoggedIn = (state) => state.user.isLoggedIn;

export const { updateName } = userSlice.actions;

export default userSlice.reducer;
