import React, { Component, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Navbar from '../components/navbar';
import Services from '../components/services';
import Details from '../components/details';

function BeerDetails() {
    const cookie = new Cookies;
    const navigate = useNavigate();
    const checkEdad = cookie.get('edad');

    useEffect(() => {
        if(checkEdad === undefined || checkEdad === '') {
            navigate('/');
        }
    });

    return(
        <div className='myApp beerLand'>
            <Navbar/>
            <Details/>
        </div>
    );
}

export default BeerDetails;