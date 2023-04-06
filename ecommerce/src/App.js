import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';

// Components
import Navbar from './Components/Navbar/Navbar';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';

// Import Redux
import { keepLoginAsync } from './Redux/Features/userSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {

  // Redux
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(keepLoginAsync())
  }, [])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
