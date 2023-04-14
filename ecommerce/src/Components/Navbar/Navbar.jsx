// React Icons
import { AiOutlineSearch } from "react-icons/ai";
import { SlBag } from "react-icons/sl";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutAsync } from "../../Redux/Features/userSlice";

function Navbar(props) {
  const dispatch = useDispatch()
  const userReducer = useSelector((state) => state.user.username)
  const transactionReducer = useSelector((state) => state.transaction.totalCart)
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
            userReducer?
              <h1 className='font-bold' onClick={() => dispatch(logoutAsync())}>
                Hi, {userReducer}
              </h1>
            :
              <Link to='/login'>
                masuk
              </Link>
          }
        </div>
      </div>
      <div className='flex justify-between py-3'>
        <div className='flex-1 relative top-[-20px]'>
          <Link to='/'>
           Logo 
          </Link>
        </div>
        <div className='flex flex-1 justify-center items-center gap-6 text-[14px]'>
          <div>
            <Link to='/products'>
              PRIA
            </Link>
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
              <input type='text' className='bg-gray-100 border-none focus:ring-gray-100 focus:border-gray-100' />
              <AiOutlineSearch />
            </div>
          </div>
          <div className='relative'>
            <Link to='/cart'>
              <SlBag className='text-lg' />
              <div className='bg-blue-400 rounded-full w-[20px] h-[20px] text-center absolute bottom-[10px] left-[15px]'>
                {transactionReducer? transactionReducer:null}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
