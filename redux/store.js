import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

const rootReducer = combineReducers({
zsz 
})
export type RootState = ReturnType<typeof rootReducer>

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['Main reducer'],
    stateReconciler: autoMergeLevel2
}

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer
})
export const persistor = persistStore(store)
export type AppDispatch = typeof store.dispatch