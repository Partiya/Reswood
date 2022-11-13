import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Mainpage from './pages/Mainpage/Mainpage';

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Mainpage/>}></Route>
     </Routes>
    </BrowserRouter>
   
  
  


  );
}

export default App;
