import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Navbar from '../components/navbar';
import Services from '../components/services';

function Home() {
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
            <Services/>
        </div>
    );
}

export default Home;