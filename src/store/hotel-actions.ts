import hotelSlice from './hotel-slice'
import { AnyAction } from '@reduxjs/toolkit'
import { ThunkAction } from '@reduxjs/toolkit'
import {RootState} from './index'
import {IHotelModel} from "../models/redux-models";
import HotelService from "../service/hotelService";


export const hotelActions=hotelSlice.actions

export const getHotels=():ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch,getState)=>{
            const response:IHotelModel[]=await HotelService.getAllHotels();
            dispatch(hotelActions.setHotels(response))
    }
}
