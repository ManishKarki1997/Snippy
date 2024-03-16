import { collectionSlice } from "@/features/collections/slices/collectionSlice";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [collectionSlice.reducerPath]: collectionSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(collectionSlice.middleware),
});

setupListeners(store.dispatch);
