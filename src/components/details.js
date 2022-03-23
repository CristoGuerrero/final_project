import React from 'react';
import Data from '../services/data.json';
import { useParams, Link } from 'react-router-dom';


function Details() {

  const data = Data;
  const {id} = useParams();
  let bId = '';
  let bname = '';
  let bimg = '';
  let bstyle = '';
  let bflag = '';
  let babv = '';
  let bprice = '';
  let bdescription = '';

  data.forEach(beer => {
    if(beer.id === parseInt(id)) {
      bId = beer.id;
      bname = beer.name;
      bstyle = beer.style;
      bflag = beer.flag;
      babv = beer.abv;
      bprice = beer.price;
      bimg = beer.img;
      bdescription = beer.description;
    }
  });

  return (
    <div className="cardHolder">
        <div key={bId}>
            <div className='img-holder'>
                <img className='beer-img' variant="top" src={bimg} alt={bname}/>
            </div>
            <div className="card-body">
                <h3 className="card-title center">{bname}</h3>
                <p className="card-text">{bdescription}</p>
                <p className="card-text"><b>Tipo: </b>{bstyle}</p>
                <p className="card-text"><b>Origen: </b> 
                  <img width="25px" height="25px" variant="top" src={bflag} alt={bname}/>
                </p>
                <p className="card-text"><b>Alc. vol: </b>{babv} €</p>
                <p className="card-text"><b>Precio: </b>{bprice} €</p>

                <Link to={`/beer`}>
                  <p className="btn btn-primary">Volver</p>
                </Link>
                
            </div>
        </div>
    </div>
  )
}

export default Details;