import { configureStore } from "@reduxjs/toolkit";
import timerSlice from "./timeSlice/timeSlice";
import discountSlice from '../store/timeSlice/discountSlice'

export const store = configureStore({
    reducer: {
        timer: timerSlice,
        rates: discountSlice
    }
})