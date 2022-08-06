
export interface IHotelModel {
    address: {
        countryCode: string;
        countryName: string;
        extendedAddress: string;
        locality: string;
        obfuscate: boolean;
        postalCode: string;
        region: string;
        streetAddress: string;
    },
    name: string,
    starRating: number,
    optimizedThumbUrls: {
        srpDesktop: string;
    }
}
// export interface IHotelModel {
//     countryCode: string;
//     countryName: string;
// }
export interface HotelArrayModel {
    hotels: IHotelModel[]
}