import logo from './logo.svg';
import './App.css';

import Profile from './Pages/Profile/profile';
import Transaction from './Pages/Transaction/transaction';

import {Routes, Route} from 'react-router-dom';
import Navbar from './Components/navbar';

function App() {
  return (
    <div>
     <Navbar />
      <Routes>
        <Route path='/' element={<Profile />} />
        <Route path='/transaction' element={<Transaction />} />
      </Routes>
      Footer
    </div>
  );
}

export default App;
