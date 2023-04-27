import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Route, Router, Routes } from 'react-router-dom';
import ProductDetails from './Components/ProductDetails';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      
      <Header/>
      
      
     
        
        <Routes>
        <Route path='/' element ={<Home/>}></Route>
        <Route path='/product/:id' element ={<ProductDetails/>}></Route>
        </Routes>

        <Footer></Footer>
     
     
      
    </div>
  );
}

export default App;
