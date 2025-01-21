import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormInputs {
  firstName: string;
  lastName?: string;
  country: string;
  price: number;
}

const initialState: FormInputs = {
  firstName: "",
  lastName: "",
  country: "",
  price: 0,
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateForm: (state, action: PayloadAction<Partial<FormInputs>>) => {
      return { ...state, ...action.payload };
    },
    clearForm: state => {
      return initialState;
    },
  },
});

export const { updateForm, clearForm } = formSlice.actions;
export default formSlice.reducer;
