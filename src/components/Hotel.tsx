import { useAppDispatch,useAppSelector } from "../hooks/redux-hooks";
import {getHotels} from '../store/hotel-actions';
import {useState, useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Rating from '@mui/material/Rating';
import './Hotel.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function getImageUrl(origin:string):string {
    var url = origin.split("?")[0];
    var str1 = url.substring(0, url.length-5);
    var str2 = url.substring(url.length-4);
    return str1+"w"+str2;
}

const Hotel=()=> {
    const dispatch=useAppDispatch();
    const hotels=useAppSelector(state=>state.hotels);
    useEffect(() => {
        dispatch(getHotels())
    }, []);

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