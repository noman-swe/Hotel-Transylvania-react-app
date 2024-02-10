import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/Home/SharedPages/Header/Header';
import Home from './pages/Home/Home/Home';
import Rooms from './pages/Rooms/Rooms';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div className='my-app'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home>Home</Home>}></Route>
        <Route path='/home' element={<Home>Home</Home>}></Route>
        <Route path='/rooms' element={<Rooms></Rooms>}></Route>
        {/* <Route path='/book' element={<></Rooms>}></Route> */}
        <Route path='/about' element={<About>About</About>}></Route>
        <Route path='/contact' element={<Contact>Contact</Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
