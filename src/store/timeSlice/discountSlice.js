import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllRates = createAsyncThunk(
    'rates/fetchAll',
    async (_, thunkAPI) => {
      const response = await fetch('https://t-pay.iqfit.app/subscribe/list-test')
      const data = await response.json()
      return data;
    },
  )


const initialState = {
    discounts: [],
    selectedSub: null,
}


const discountSlice = createSlice({
    name: 'discount',
    initialState,
    reducers: {
        selectSub: (state,action) => {
            state.selectedSub = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllRates.fulfilled, (state,action) => {
            state.discounts = action.payload
        })
    }
})

export const {selectSub} = discountSlice.actions
export default discountSlice.reducer;