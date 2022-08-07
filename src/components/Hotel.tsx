import { useAppDispatch,useAppSelector } from "../hooks/redux-hooks";
import {getHotels} from '../store/hotel-actions';
import {useState, useEffect, Fragment} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Rating from '@mui/material/Rating';
import './Hotel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from '@mui/material/Grid';

import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { DateRangePicker, DateRange } from '@mui/x-date-pickers-pro';
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function getImageUrl(origin:string):string {
    var url = origin.split("?")[0];
    var str1 = url.substring(0, url.length-5);
    var str2 = url.substring(url.length-4);
    return str1+"w"+str2;
}

const Hotel=()=> {
    const dispatch=useAppDispatch();
    const hotels=useAppSelector(state=>state.hotels);
    
    const [adults, setAdults] = useState('1');
    const [dates, setDates] = useState<DateRange<Date>>([new Date("2021-03-01"), new Date("2022-08-05")]);
    function changeAdults(change:number):void {
        setAdults(String(parseInt(adults)+change));
    }
    useEffect(() => {
        let check_in = "";
        let check_out = "";
        if(dates[0]&&dates[1]) {
            check_in = dates[0].toISOString().slice(0,10);
            check_out = dates[1].toISOString().slice(0, 10);
            dispatch(getHotels(check_in, check_out, adults));
        }
        
    },[dates, adults]);

    return(
        <>
            <Carousel>
                {
                    hotels.hotels.map((hotel, index) => (

                        <Carousel.Item key={index}>
                            <img
                            className="d-block w-100"
                            src={getImageUrl(hotel.optimizedThumbUrls.srpDesktop)}
                            />
                        </Carousel.Item>
                    ))
                }
                
            </Carousel>

            <Box sx={{ flexGrow: 1 }} className = "filter-container">
                <Grid container spacing={2}>
                    <Grid item xs={6} md={6}>
                        <LocalizationProvider
                            dateAdapter={AdapterDateFns}
                            localeText={{ start: 'Check-in', end: 'Check-out' }}
                        >
                            <DateRangePicker
                                value={dates}
                                inputFormat="yyyy-MM-dd"
                                onChange={(newValue) => {
                                setDates(newValue);
                            }}
                                renderInput={(startProps, endProps) => (
                                <Fragment>
                                    <TextField {...startProps} />
                                    <Box sx={{ mx: 2 }}> to </Box>
                                    <TextField {...endProps} />
                                </Fragment>
                                )}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <span>Adults:</span>
                        <Button variant="outlined" onClick={()=>changeAdults(1)}><AddIcon/></Button>
                        <span>{adults}</span>
                        <Button variant="outlined" onClick={()=>changeAdults(-1)}><RemoveIcon/></Button>
                    </Grid>
                </Grid>
            </Box>
            
            {
                hotels.hotels.map((hotel, index) => (
                    <div className="hotel-item" key = {index}>
                        <Row>
                            <Col sm={3}>
                                <img src={hotel.optimizedThumbUrls.srpDesktop}/>
                            </Col>
                            <Col sm={6}>
                                <h4>{hotel.name}</h4>
                            </Col>
                            <Col sm={3}>
                                <Rating name="read-only" value={hotel.starRating} readOnly />
                            </Col>
                        </Row>
                    </div>
                ))
            }
        </>
    );
}

export default Hotel;