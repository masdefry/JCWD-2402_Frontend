import {useRef, useState} from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

import { BsArrowRight } from "react-icons/bs";
import { HiOutlineCheck } from "react-icons/hi";
import { FiEye, FiEyeOff } from "react-icons/fi";

import { Link } from 'react-router-dom';

function Register() {

  const [isShowPass, setIsShowPass] = useState(false)

  const _firstName = useRef()
  const _lastName = useRef()
  const _day = useRef()
  const _month = useRef()
  const _year = useRef()
  const _username = useRef()
  const _email = useRef()
  const _password = useRef()
  const _confirmPassword = useRef()

  const onRegister = async() => {
    try {
      const firstName = _firstName.current.value
      const lastName = _lastName.current.value
      const day = _day.current.value
      const month = _month.current.value
      const year = _year.current.value
      const username = _username.current.value
      const email = _email.current.value
      const password = _password.current.value
      const confirmPassword = _confirmPassword.current.value 

      if(!firstName || !lastName || !day || !month || !year || !email || !password || !confirmPassword) throw {message: 'Data Incompleted!'}
      if(password !== confirmPassword) throw {message: 'Password Doesnt Match!'}
      if(!email.includes('@')) throw {message: 'Email Invalid!'}
      let findEmail = await axios.get(`http://localhost:5000/users?email=${email}`)
      let findUsername = await axios.get(`http://localhost:5000/users?username=${username}`)
      
      if(findEmail.data.length !== 0) throw {message: 'Email Already Register!'}
      if(findUsername.data.length !== 0) throw {message: 'Username Already Exist!'}
      let response = await axios.post('http://localhost:5000/users', {firstName, lastName, birthdate: `${year}-${month}-${day}`, username, email, password})
      _firstName.current.value = ''
      _lastName.current.value = ''
      _day.current.value = ''
      toast.success('Register Success!')
    } catch (error) { // error: {message: 'Data Incompleted!'}
      toast.error(error.message)
    }
  }
 
  return (
    <>
    <Toaster />
      <div className='flex gap-7 px-24'>
        <div className='flex-1'>
          <div>
            <h1 className='text-[52px] font-bold'>
              REGISTRASI
            </h1>
          </div>
          <div>
            <h1 className='text-xl font-bold'> 
              NAMA ANDA
            </h1>
            <input type='text' ref={_firstName} placeholder='Nama Depan' className='border border-gray-600 w-full mt-3 px-3 py-3 outline-none' />
            <input type='text' ref={_lastName} placeholder='Nama Belakang' className='border border-gray-600 w-full mt-3 px-3 py-3 outline-none' />
          </div>
          <div className='pt-7'>
            <h1 className='text-xl font-bold'> 
              Tanggal Lahir
            </h1>
            <div className='flex gap-3'>
              <input type='text' ref={_day} placeholder='Day' className='border border-gray-600 mt-3 px-3 py-3 outline-none' />
              <input type='text' ref={_month} placeholder='Month' className='border border-gray-600 mt-3 px-3 py-3 outline-none' />
              <input type='text' ref={_year} placeholder='Year' className='border border-gray-600 mt-3 px-3 py-3 outline-none' />
            </div>
          </div>
          <div className='pt-7'>
            <h1 className='text-xl font-bold'> 
              Username
            </h1>
            <input type='text' ref={_username} placeholder='Email' className='border border-gray-600 w-full mt-3 px-3 py-3 outline-none' />
          </div>
          <div className='pt-7'>
            <h1 className='text-xl font-bold'> 
              Email
            </h1>
            <input type='text' ref={_email} placeholder='Email' className='border border-gray-600 w-full mt-3 px-3 py-3 outline-none' />
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
            <input type='password' ref={_confirmPassword} placeholder='Konfirmasi Kata Sandi' className='border border-gray-600 w-full mt-3 px-3 py-3 outline-none' />
          </div>
          <div className='py-7'>
            <button onClick={onRegister} className='flex items-center gap-3 border border-gray-900'>
                <div className='flex gap-3 items-center bg-gray-900 text-white px-7 py-3 relative top-[-3px] left-[-3px]'>
                    REGISTER <BsArrowRight />
                </div>
            </button>
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
            <Link to='/login'>
              Goto Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
