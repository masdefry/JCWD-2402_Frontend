import {useRef, useState} from 'react';
import { Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { HiOutlineCheck } from "react-icons/hi";
import { FiEye, FiEyeOff } from "react-icons/fi";

// Import Redux
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync } from '../../Redux/Features/userSlice';

// Components
import Button from '../../Components/Button/Button';

function Login(props) {

  const [isShowPass, setIsShowPass] = useState(false)

  const _usernameOrEmail = useRef()
  const _password = useRef()

  const dispatch = useDispatch()
  const userReducer = useSelector((state) => state.user.username)

  if(userReducer) return <Navigate to='/' />

  return (
    <>
    {console.log(userReducer)}
    <Toaster />
      <div className='flex gap-7 px-24'>
        <div className='flex-1'>
          <div>
            <h1 className='text-[52px] font-bold'>
              LOGIN
            </h1>
          </div>
          <div className='pt-7'>
            <h1 className='text-xl font-bold'> 
              Username or Email
            </h1>
            <input type='text' ref={_usernameOrEmail} placeholder='Email' className='border border-gray-600 w-full mt-3 px-3 py-3 outline-none' />
          </div>
          <div className='pt-7'>
            <h1 className='text-xl font-bold'> 
              Kata Sandi
            </h1>
            <div className='flex border border-gray-600 px-3 pb-3'>
              <input type={isShowPass? 'text':'password'} ref={_password} placeholder='Kata Sandi' className='w-full mt-3 outline-none' />
              {
                isShowPass?
                <FiEye onClick={() => setIsShowPass(!isShowPass)} className='mt-4' />
                :
                <FiEyeOff onClick={() => setIsShowPass(!isShowPass)} className='mt-4' />
              }
            </div>
          </div>
          <div className='py-7'>
            <Button onEvent={() => dispatch(loginAsync(_usernameOrEmail.current.value, _password.current.value))} borderColor='border-gray-900' backgroundColor='bg-gray-900' value='LOGIN' />
          </div>
        </div>
        <div className='flex-1'>
          <div>
            <h1 className='text-[52px] font-bold'>
              BUAT AKUN
            </h1>
            <p>
              Sangat mudah. Masukkan alamat email Anda, isi formulir di bagian kiri dan nikmati keuntungan dari memiliki akun, misalnya:
              <ul>
                <li className='flex gap-1 items-center'><HiOutlineCheck /> Produk dengan harga spesial sepanjang tahun, setiap hari.</li>
                <li className='flex gap-1 items-center'><HiOutlineCheck /> Akses awal ke SALE</li>
                <li className='flex gap-1 items-center'><HiOutlineCheck /> Tinjauan informasi personal Anda</li>
                <li className='flex gap-1 items-center'><HiOutlineCheck /> Lacak & cek pesanan Anda</li>
                <li className='flex gap-1 items-center'><HiOutlineCheck /> Kelola Wishlist</li>
              </ul>
            </p>
            <div className='py-7'>
                <Button borderColor='border-gray-900' backgroundColor='bg-gray-900' value='REGISTRASI' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
