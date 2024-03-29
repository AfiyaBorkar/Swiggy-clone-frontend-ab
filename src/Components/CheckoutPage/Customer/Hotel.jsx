import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter } from "react-router-dom";

const Wrapper = styled.div`
    padding-left: 0px !important;

    div {
        // border: 1px solid red !important;
        padding-right: 0px !important;
        padding-left: 0px !important;
    }
`;

const Logo = styled.img`
    width: 50px;
    height: 50px;
    padding-left: 0px !important;
`;

const Title = styled.p`
    margin-top: 5px;
    margin-bottom: 1px;
    font-size: 17px !important;
    color: #282c3f;
    font-weight: 500;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    line-height: 1rem;
`;

const Hotel = () => {
    const [hotelName, setHotelName] = useState('');
    const [hotelImg, setHotelImg] = useState('');
    const [hotelArea, setHotelArea] = useState('');

    useEffect(() => {
        setHotelName(JSON.parse(localStorage.getItem('hotel')).name);
        setHotelImg(JSON.parse(localStorage.getItem('hotel')).img_url);
        setHotelArea(
            () =>
                // `${JSON.parse({"area":"rtn"})}, ${
                //     JSON.parse({"place_name":"rtn"})
                // }`,
                `${JSON.parse(localStorage.getItem('Coordinates')).area}, ${
                    JSON.parse(localStorage.getItem('Coordinates')).place_name
                }`,
        );
    });

    return (
        <BrowserRouter>
        <Wrapper>
            <div className='row mb-3'>
                <div className='col-2 col-md-auto'>
                    <Logo src={hotelImg} alt='Hotel' />
                </div>
                <div
                    className='col row-cols-1 text-truncate ml-2'
                    style={{ maxWidth: '60%', borderBottom: '2px solid black' }}
                >
                    <div className='col'>
                        <Title>{hotelName}</Title>
                    </div>
                    <div className='col text-truncate text-muted font-weight-light'>
                        {hotelArea}
                    </div>
                </div>
            </div>
        </Wrapper>
        </BrowserRouter>
    );
};

export default Hotel;
