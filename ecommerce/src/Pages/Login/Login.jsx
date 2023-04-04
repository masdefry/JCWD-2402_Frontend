import {useRef, useState} from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

import { BsArrowRight } from "react-icons/bs";
import { HiOutlineCheck } from "react-icons/hi";
import { FiEye, FiEyeOff } from "react-icons/fi";

function Login(props) {

  const [isShowPass, setIsShowPass] = useState(false)

  const _usernameOrEmail = useRef()
  const _password = useRef()

  return (
    <>
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
            <button onClick={() => props.loginFunction(_usernameOrEmail, _password)}  className='flex items-center gap-3 border border-gray-900'>
                <div className='flex gap-3 items-center bg-gray-900 text-white px-7 py-3 relative top-[-3px] left-[-3px]'>
                    LOGIN <BsArrowRight />
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
            <div className='py-7'>
                <button  className='flex items-center gap-3 border border-gray-900'>
                    <div className='flex gap-3 items-center bg-gray-900 text-white px-7 py-3 relative top-[-3px] left-[-3px]'>
                        REGISTRASI <BsArrowRight />
                    </div>
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
