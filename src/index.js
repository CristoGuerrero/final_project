import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Beers from './components/Beers';
import Home from './components/Home';
import Services from './components/Services';
import DataFetch from './components/DataFetch'


ReactDOM.render(
  <React.StrictMode>
    <App />
    <BrowserRouter>
        <Routes>
          <Route path= "/" element= {<Home/>}/>
          <Route path= "/beers" element= {<Beers/>}/>
          <Route path= "/datafetch" element= {<DataFetch/>}/>
          <Route path= "/services" element={<Services/>} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
