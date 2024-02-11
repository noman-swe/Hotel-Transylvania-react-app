import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/Home/SharedPages/Header/Header';
import Home from './pages/Home/Home/Home';
import Rooms from './pages/Rooms/Rooms';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Footer from './pages/Home/SharedPages/Footer/Footer';
import useRooms from './hooks/useRooms';
import Room from './pages/Room/Room';
import { addToDb } from './utilities/localStorageSave';

function App() {
  const [rooms] = useRooms();

  const handleBookNow = clickedId => {
    console.log(clickedId);
    addToDb(clickedId);
  }

  return (
    <div className='my-app'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home>Home</Home>}></Route>
        <Route path='/home' element={<Home>Home</Home>}></Route>

        <Route path='/rooms' element={
          <Rooms>
            {
              rooms.map(room => <Room
                key={room.id}
                room={room}
                handleBookNow={handleBookNow}
              >
              </Room>)
            }
          </Rooms>
        }>

        </Route>

        <Route path='/about' element={<About>About</About>}></Route>
        <Route path='/contact' element={<Contact>Contact</Contact>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
