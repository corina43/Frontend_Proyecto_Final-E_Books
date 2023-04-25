import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../containers/User/userSlice';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    user: userSlice.reducers,
   // detail: detailSlice,
  
})

export default configureStore;