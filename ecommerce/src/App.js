import './App.css';

// Components
import Navbar from './Components/Navbar/Navbar';

import { BsArrowRight } from "react-icons/bs";

function App() {
  return (
    <>
      <Navbar />
      <div className='flex px-24'>
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
            <input type='text' placeholder='Nama Depan' className='border border-gray-600 w-full mt-3 px-3 py-3 outline-none' />
            <input type='text' placeholder='Nama Belakang' className='border border-gray-600 w-full mt-3 px-3 py-3 outline-none' />
          </div>
          <div className='pt-7'>
            <h1 className='text-xl font-bold'> 
              Tanggal Lahir
            </h1>
            <div className='flex gap-3'>
              <input type='text' placeholder='Day' className='border border-gray-600 mt-3 px-3 py-3 outline-none' />
              <input type='text' placeholder='Month' className='border border-gray-600 mt-3 px-3 py-3 outline-none' />
              <input type='text' placeholder='Year' className='border border-gray-600 mt-3 px-3 py-3 outline-none' />
            </div>
          </div>
          <div className='pt-7'>
            <h1 className='text-xl font-bold'> 
              Email
            </h1>
            <input type='text' placeholder='Email' className='border border-gray-600 w-full mt-3 px-3 py-3 outline-none' />
          </div>
          <div className='pt-7'>
            <h1 className='text-xl font-bold'> 
              Kata Sandi
            </h1>
            <input type='password' placeholder='Kata Sandi' className='border border-gray-600 w-full mt-3 px-3 py-3 outline-none' />
          </div>
          <div className='py-7'>
            <div className='border border-gray-900 w-[130px] h-[50px] relative'>
              <button className='flex items-center gap-3 bg-gray-900 text-white px-7 py-3 absolute top-[-3px]'>
                KIRIM <BsArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className='flex-1'>
          Kanan
        </div>
      </div>
    </>
  );
}

export default App;
