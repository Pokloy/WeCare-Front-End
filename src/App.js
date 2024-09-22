import './App.css';


import AppNavbar from './components/AppNavbar';
import AppFooter from './components/AppFooter';

import Login from './pages/Login';
import Home from './pages/Home';
import Home2 from './pages/Home2';
import Registration1 from './pages/Registration1';
import Registration2 from './pages/Registration2';
import Registration3 from './pages/Registration3';

import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/welcome" element={<Home2/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registration1" element={<Registration1/>}/>
        <Route path="/registration2" element={<Registration2/>}/>
        <Route path="/registration3" element={<Registration3/>}/>
      </Routes>
    </Router>
  );
}

export default App;
