import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Women from './pages/Women';
import Men from './pages/Men';
import Test from './pages/Test';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/Login' element={ <Login /> } />
        <Route path='/Women' element={ <Women /> } />
        <Route path='/Men' element={ <Men /> } />
        <Route path='/test' element={ <Test /> } />
      </Routes>
    </div>
  );
}

export default App;
