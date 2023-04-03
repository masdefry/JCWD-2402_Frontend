import './App.css';
import { Route, Routes } from 'react-router-dom';

// Components
import Navbar from './Components/Navbar/Navbar';
import Register from './Pages/Register/Register';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
