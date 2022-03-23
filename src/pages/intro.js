import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import NoAuth from './no-auth';


function Intro() {
    
    const navigate = useNavigate();
    const cookie = new Cookies();
    let checkEdad = cookie.get('edad');
    let state = false;

    useEffect(() => {
        if(checkEdad === 'Si') {
            navigate('/beer');
        }
    });


    const changeState = (e) => {
        cookie.set('state', 'No');
        navigate('/NoAuth');
    }

    const acceptEdad = (e) => {
        cookie.set('edad', 'Si');
        navigate('/beer');
    }

    return(
        <div className='backgroundBeer'>
            {
                !state ?
                <div className='modalmayor'>
                    <div className='titulo'><h3>BeerLand</h3></div>
                    <div className='subtitulo'>
                        <p>¿Eres mayor de edad?</p>
                    </div>
                    <div className="buttons">    
                        <button onClick={() => acceptEdad()}>SI</button>
                        <button onClick={() => changeState()}>NO</button>
                    </div>
                    <div className="description">
                        Está a punto de entrar a un sitio web titularidad de BeerLand 
                        cuyo contenido se dirige únicamente a mayores de edad. Para asegurarnos de que sólo es 
                        visible para estos usuarios hemos incorporado el filtro de edad, que usted debe responder 
                        verazmente. Su funcionamiento es posible gracias a la utilización de cookies técnicas que resultan estrictamente necesarias y que serán eliminadas cuando salga de esta web.
                    </div>
                </div> 
                : <NoAuth></NoAuth>
            }
        </div>
    );
}


export default Intro;