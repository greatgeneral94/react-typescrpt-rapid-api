
import axios from 'axios';


export default{
    async getAllHotels(){

        const options = {
            method: 'GET',
            url: 'https://hotels4.p.rapidapi.com/properties/list',
            params: {
                destinationId: '1506246',
                pageNumber: '1',
                pageSize: '25',
                checkIn: '2022-03-03',
                checkOut: '2022-08-05',
                adults1: '1',
                sortOrder: 'PRICE',
                locale: 'en_US',
                currency: 'USD'
            },
            headers: {
                'X-RapidAPI-Key': '3ab49482b3msh83ad2ad75bdd4d1p187a14jsn2eb437a14d4b',
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
