import React from 'react';
import Data from "./data.json"

const Services = () => {
  return (
    
    <div>
    {Data.map(beer =>{
      return(
        <div key={ beer.id } className='beer'>
          <h4>{beer.name}</h4>
          <img src="{{beer.img}}" alt=""/>
          <p>{beer.description}</p>
          <p>{beer.style}</p>
          <p>{beer.abv}</p>
          <p>Precio EUR {beer.price}</p>
        </div>
      )
    })}
    </div>
  )
}

export default Services;