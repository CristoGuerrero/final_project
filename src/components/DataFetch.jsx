import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

const DataFetch = () => {
  
  const[Beers,setBeers] = useState ([])

  useEffect(()=> {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res =>{
      console.log(res)
    })
    .catch(err =>{
      console.log(err)
    })
  })

  return (
    <div>
       <ul>
         {Beers.map(beer =>(
           <li key={beer.id}>
             {beer.name}
           </li>
         ))}
       </ul>
    </div> 
  )
}

export default DataFetch;