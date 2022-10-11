import { NavBar } from './NavBar';
import Home from'./Element/Home';
import About from'./Element/About';
import Contact from'./Element/Contact';
import ApexChart from'./Element/chart';
import Bisection from'./Element/Bisection';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Chart" element={<ApexChart/>} />
        <Route path="/Bisection" element={<Bisection/>} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
