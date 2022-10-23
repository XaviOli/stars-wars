import Navbar from './components/navbar/Navbar';
import Navhome from './components/navhome/Navhome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Starships from './pages/starships/Starships';
import StarshipDetails from './pages/starshipDetails/StarshipDetails';


function App() {
  return (
    <>
      <BrowserRouter>

        <header className="App">
          <Navbar />
          <Navhome />
        </header>

        <Routes>
          <Route path="/starships" element={<Starships />} />
          <Route path="/starship-details" element={<StarshipDetails />} />
          <Route path="/home" element={<Home />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
