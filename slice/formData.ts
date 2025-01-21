import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormInputs {
  firstName: string;
  lastName?: string;
  country: string;
  countryData: any;
  price: number;
}

const initialState: FormInputs = {
  firstName: "",
  lastName: "",
  country: "",
  countryData: {
    currencies: {
      default: {
        symbol: "$",
      },
    },
  },
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
