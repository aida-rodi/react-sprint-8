import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Starships from './pages/Starships';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/starships' element={<Starships/>} />
      </Routes>
    </Router>
  )
};

export default App
