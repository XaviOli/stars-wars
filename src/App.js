import './App.css';
import Navbar from './components/Navbar';
import Navhome from './components/Navhome';
import { H1 } from './components/Styles';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <H1>Star wars App</H1>
        <Navhome />
      </div>
    </>
  );
}

export default App;
