import React from 'react';
import Data from '../services/data.json';
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';
import { Card, Button, Container } from 'react-bootstrap';


const Services = () => {    
  const data = Data;
  return (
    <div className="cardHolder">
        {data.map((beer) => (
        <div className="card beerCard" key={beer.id}>
            <div className='img-holder'>
                <img className='beer-img' variant="top" src={beer.img} alt={beer.name}/>
            </div>
            <div className="card-body">
                <h5 className="card-title">{beer.name}</h5>
                <p className="card-text">{beer.price}</p>
                <Link to={`/beer/${beer.id}`}>
                  <p className="btn btn-primary">Saber más</p>
                </Link>
            </div>
        </div>
      ))}
    </div>
  )
}

export default Services;