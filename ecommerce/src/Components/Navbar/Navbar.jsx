// React Icons
import { AiOutlineSearch } from "react-icons/ai";
import { SlBag } from "react-icons/sl";

function Navbar(props) {
  return (
    // Section1: Navbar
    <div className='px-10 border-b'>
      <div className='flex justify-end gap-5 pt-1 text-[13px]'>
        <div>
          status pesanan
        </div>
        <div>
          bantuan
        </div>
        <div>
          newsletter
        </div>
        <div>
          {
            props.username?
              <h1 className='font-bold'>
                Hi, {props.username}
              </h1>
            :
              'masuk'
          }
        </div>
      </div>
      <div className='flex justify-between py-3'>
        <div className='flex-1 relative top-[-20px]'>
          Logo 
        </div>
        <div className='flex flex-1 justify-center items-center gap-6 text-[14px]'>
          <div>
            PRIA
          </div>
          <div>
            WANITA
          </div>
          <div>
            ANAK
          </div>
          <div>
            OLAHRAGA
          </div>
        </div>
        <div className='flex flex-1 justify-end items-center gap-3'>
          <div>
            <div className='flex items-center border border-gray bg-gray-100 px-3 py-1'>
              <input type='text' className='bg-gray-100 outline-none' />
              <AiOutlineSearch />
            </div>
          </div>
          <div>
            <SlBag className='text-lg' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
