import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/Home/SharedPages/Header/Header';
import Home from './pages/Home/Home/Home';
import Rooms from './pages/Rooms/Rooms';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home>Home</Home>}></Route>
        <Route path='/home' element={<Home>Home</Home>}></Route>
        <Route path='/rooms' element={<Rooms>Rooms</Rooms>}></Route>
      </Routes>
    </div>
  );
}

export default App;
