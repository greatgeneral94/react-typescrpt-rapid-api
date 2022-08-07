
import axios from 'axios';


export default{
    async getAllHotels(checkin:string, checkout:string, adult:string){

        const options = {
            method: 'GET',
            url: 'https://hotels4.p.rapidapi.com/properties/list',
            params: {
                destinationId: '1506246',
                pageNumber: '1',
                pageSize: '25',
                checkIn: checkin,
                checkOut: checkout,
                adults1: adult,
                sortOrder: 'PRICE',
                locale: 'en_US',
                currency: 'USD'
            },
            headers: {
                'X-RapidAPI-Key': '29c138cfa3msh8a143866b9acee8p13f5f5jsnb197751649f0',
                'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
            }
        };
        var response = await axios.request(options);
        return response.data.data.body.searchResults.results;
    },
    
    async getAllImages(){
        const options = {
            method: 'GET',
            url: 'https://hotels4.p.rapidapi.com/properties/get-hotel-photos',
            params: {
                id: 1178275040
            },
            headers: {
                'X-RapidAPI-Key': '3ab49482b3msh83ad2ad75bdd4d1p187a14jsn2eb437a14d4b',
                'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
            }
        };
        var response = await axios.request(options);console.log(response);
        // return response.data.data.body.searchResults.results;
    }

    
}
