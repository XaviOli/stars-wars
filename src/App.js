import Navbar from './components/navbar/Navbar';
import Navhome from './components/navhome/Navhome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Starships from './pages/starships/Starships';
import StarshipDetails from './pages/starshipDetails/StarshipDetails';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
  return (
    <>
      <BrowserRouter>

        <header className="App">
          <Navbar />
          <Navhome />
        </header>

        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/starships" element={<Starships />} />
          <Route path="/starship/:id" element={<StarshipDetails />} />
          <Route path="/home" element={<Home />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
