import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import HeaderReducer from "./HeaderReducer";
const Config = {
  key: "HeaderReducer",
  storage,
};
const reducers = HeaderReducer.reducer;
const persistorReducer = persistReducer(Config, reducers);

const store = configureStore({
  reducer: persistorReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
const persistor = persistStore(store);
export { store, persistor };
