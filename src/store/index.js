import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from "redux-persist";
import mainReducer from './slices/mainSlice'
const persistConfig = {
    key: 'root',
    storage,
    blacklist:['main']
}
const rootReducer = combineReducers({
    main: mainReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});
export const persistor = persistStore(store);
export default store;