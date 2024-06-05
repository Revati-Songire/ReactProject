import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/Home'
import Menu from './components/Menu'
import About from './components/About'
import Booking from './components/Booking'
import Signin from './components/Signin';
import Signup from './components/Signup';
import Signout from './components/Signout';
import Cart from './components/Cart';
import Search from './components/Search';
function App() {
  return (
    <div className="App">
          
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Menu' element={<Menu/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Booking' element={<Booking/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/Signup'element={<Signup/>}/>
        <Route path='/Signout'element={<Signout/>}/>
        <Route path='/cart'element={<Cart/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}
export default App;
