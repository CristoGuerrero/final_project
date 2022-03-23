import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Navbar from '../components/navbar';

function About() {
    const cookie = new Cookies();
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
            <div className="container mt-5">
                <center>
                    <img src="https://www.collinsdictionary.com/images/full/beer_123784216.jpg" width="200px" height="350px" alt="beerland"/>
                </center>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
    );
}

export default About;