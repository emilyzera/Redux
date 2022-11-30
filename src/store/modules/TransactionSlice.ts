import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface TransactionSlice {
  balance: number;
}

const initialState = { balance: 1000 } as TransactionSlice;

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addValue(state, action: PayloadAction<number>) {
      state.balance += action.payload;
    },
    subValue(state, action: PayloadAction<number>) {
      state.balance -= action.payload;
    },
  },
});

export const { addValue, subValue } = transactionSlice.actions;
export default transactionSlice.reducer;
