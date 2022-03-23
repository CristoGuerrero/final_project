import './App.css';
import Intro from './pages/intro';
import Cookies from 'universal-cookie';
import Home from './pages/home';
import NoAuth from './pages/no-auth';
import About from './pages/about';
import BeerDetails from './pages/beer-details';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const cookies = new Cookies();
  const edad = cookies.get('edad');
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />}></Route>
        <Route path='/beer' element={<Home />}></Route>
        <Route path='/beer/:id' element={<BeerDetails />}></Route>
        <Route path='/NoAuth' element={<NoAuth />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='*' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
