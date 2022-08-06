import {IHotelModel, HotelArrayModel} from "../models/redux-models";
import { createSlice,PayloadAction } from "@reduxjs/toolkit";

const initialHotelState:HotelArrayModel={
    hotels: [
        {
            address: {
                countryCode: "",
                countryName: "",
                extendedAddress: "",
                locality: "",
                obfuscate: false,
                postalCode: "",
                region: "",
                streetAddress: ""
            },
            name: "",
            starRating: 0,
            optimizedThumbUrls: {
                srpDesktop: ""
            }
        }
    ]
}

const hotelSlice=createSlice({
    name:'hotel',
    initialState:initialHotelState,
    reducers:{
        setHotels(state,action:PayloadAction<IHotelModel[]>){
            state.hotels=action.payload;
        }
    }
})
export default hotelSlice;