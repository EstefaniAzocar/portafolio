
import './App.css';
import Header from './view/header/header';
import Portafolio from './view/portafolio/portafolio';
import Home from './view/home/home';
import Contactame from './view/contactame/contactame';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SobreMi from "./view/sobreMi/SobreMi";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
      {/* <Route path='/' element={<Header/>}/> */}
        <Route path='/' element={<Home/>}/>
        <Route path='/sobreMi' element={<SobreMi/>}/>
        <Route path='/portafolio' element={<Portafolio/>}/>
        <Route path='/contactame' element={<Contactame/>}/>
        <Route path='*' element={<Navigate replace to='/'/>}/>
      </Routes>
    </BrowserRouter>
 
  );
}

export default App;
