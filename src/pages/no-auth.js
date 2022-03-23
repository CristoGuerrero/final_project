import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

function NoAuth () {
    const navigate = useNavigate();
    const cookie = new Cookies();

    const backState = (e) => {
        cookie.set('state', 'Si');
        navigate('/');
    }

    return(
        <div className='backgroundBeer'>
            <div className='modalmayor'>
            <div className='titulo'><h3>BeerLand</h3></div>                
            <div className="subtitulo">
                <p>¡Ups! Parece que alguien quiere tener 18 años.</p>
            </div>
            <div className="buttons">
                <button onClick={() => backState()}>VOLVER</button>
            </div>
        </div>
    </div>
    );
}

export default NoAuth;