import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Starships from './pages/Starships';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import { initializeApp } from 'firebase/app';
import { config } from './config/config';
import AuthRoute from './components/AuthRoute';

initializeApp(config.firebaseConfig)

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/starships' element={<AuthRoute><Starships/></AuthRoute>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </Router>
  )
};

export default App
