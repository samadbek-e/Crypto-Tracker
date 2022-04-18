import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { CryptoApi } from './CryptoReducer';

export const store = configureStore({
  reducer: {
    [CryptoApi.reducerPath]: CryptoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(CryptoApi.middleware),
});

setupListeners(store.dispatch);
