import { configureStore } from "@reduxjs/toolkit";
import formDataReducer from "./slice/formData";

export const makeStore = () => {
  return configureStore({
    reducer: {
      form: formDataReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<ReturnType<typeof makeStore>["getState"]>;
export type AppDispatch = ReturnType<typeof makeStore>["dispatch"];
