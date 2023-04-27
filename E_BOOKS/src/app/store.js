// import { configureStore } from '@reduxjs/toolkit';
// import userSlice from '../containers/User/userSlice';
// import { combineReducers } from 'redux';
// import detailSlice from '../containers/Detail/detailSlice';

// const reducers = combineReducers({
//     user: userSlice.reducers,
//    // detail: detailSlice,
  
// })

// export default configureStore;

//store.js
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import userSlice from '../containers/User/userSlice';

const reducers = combineReducers({
  user: userSlice.reducers,
  // detail: detailSlice,
})

const store = configureStore({
  reducer: reducers
});


export const allProductos = async () => {
    try {
      let res = await axios.get(`${URL}/productos/`);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };


export default store;
