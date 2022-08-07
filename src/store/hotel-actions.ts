import hotelSlice from './hotel-slice'
import { AnyAction } from '@reduxjs/toolkit'
import { ThunkAction } from '@reduxjs/toolkit'
import {RootState} from './index'
import {IHotelModel} from "../models/redux-models";
import HotelService from "../service/hotelService";


export const hotelActions=hotelSlice.actions

export const getHotels=(checkin:string, checkout:string, adult:string):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch,getState)=>{
        const response:IHotelModel[]=await HotelService.getAllHotels(checkin, checkout, adult);
        dispatch(hotelActions.setHotels(response));
    }
}
