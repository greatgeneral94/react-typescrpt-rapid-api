import {configureStore} from '@reduxjs/toolkit';
import hotelSlice from './hotel-slice'

const store=configureStore(
    {
        reducer:{hotels: hotelSlice.reducer}
    }
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch =typeof store.dispatch
export default store;