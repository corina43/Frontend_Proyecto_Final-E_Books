import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import userSlice from '../containers/User/userSlice';
import detailSlice from '../containers/Detail/detailSlice';

const reducers = combineReducers({
    user: userSlice,
    detail: detailSlice,
})
const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, reducers);
export default configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});




