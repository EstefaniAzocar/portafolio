
import './App.css';
import Header from './view/header/header';
import Portafolio from './view/portafolio/portafolio.js';
import Home from './view/home/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>

      {/* <Route path='/' element={<Header/>}/> */}
        <Route path='/' element={<Home/>}/>
        <Route path='/Portafolio' element={<Portafolio/>}/>
      </Routes>
    </BrowserRouter>
  //   <div>
  //     <Home/>
  //   </div>
  );
}

export default App;
