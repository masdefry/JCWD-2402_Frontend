import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, {Toaster} from 'react-hot-toast';
import { useState } from 'react';

// Components
import Navbar from './Components/Navbar/Navbar';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';

function App() {

  const Navigate = useNavigate()

  const [username, setUsername] = useState('')

  const onLogin = async(_usernameOrEmail, _password) => {
    try {
        if(_usernameOrEmail.current.value.includes('@')){
            var response = await axios.get(`http://localhost:5000/users?email=${_usernameOrEmail.current.value}&password=${_password.current.value}`)
        }else{
            var response = await axios.get(`http://localhost:5000/users?username=${_usernameOrEmail.current.value}&password=${_password.current.value}`)
        }
        
        if(response.data.length === 0) throw {message: 'Account Not Found!'}
        setUsername(response.data[0].username)
        toast.success('Login Success!')
        setTimeout(() => {
          Navigate('/register')
        }, 3000)
    } catch (error) {
        toast.error(error.message)
    }
  }

  return (
    <>
      <Navbar username={username} />
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login loginFunction={onLogin} />} />
      </Routes>
    </>
  );
}

export default App;
