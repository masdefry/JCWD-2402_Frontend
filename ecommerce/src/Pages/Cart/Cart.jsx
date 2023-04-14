import { useEffect } from "react";
import Button from "../../Components/Button/Button";
import Card from "./Card";

import { useSelector, useDispatch } from "react-redux";
import { getCartAsync } from "../../Redux/Features/transactionSlice";

export default function Cart(){

    const dispatch = useDispatch()
    const cartReducer = useSelector((state) => state.transaction.cart)

    useEffect(() => {
        dispatch(getCartAsync())
    }, [])

    return(
        <div className='flex gap-3 px-[100px] py-[50px]'>
            <div className='flex-2'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-end gap-3'>
                        <h1 className='text-4xl font-bold'>
                            Bag Anda
                        </h1>
                        <h6 className='text-xl'>
                            4 Item 
                        </h6>
                    </div>
                    <div>
                        Lanjutkan Belanja
                    </div>
                </div>
                {
                    cartReducer.length?
                        
                    
                    
                    <Card data={cartReducer?cartReducer:[]} />
                    :
                    <div>
                        Oppsie!
                    </div>
                }
            </div>
            <div className='flex-1 pl-5'>
                <div className='bg-gray-100 px-5 py-5'>
                    <div>
                        <Button borderColor='border-gray-900' backgroundColor='bg-gray-900' value='CHECKOUT' />
                    </div>
                    <div className='py-3'>
                        <h1 className='text-2xl font-bold'>
                            RINCIAN PESANAN:
                        </h1>
                    </div>
                    <div className='bg-white px-3'>
                        <div className='border-b py-3'>
                            <h6>
                                4 Produk
                            </h6>
                        </div>
                        <div className='flex justify-between border-b py-3'>
                            <div>
                                Total Produk 
                            </div>
                            <div>
                                Rp. xxx.xxx.xxx
                            </div>
                        </div>
                        <div className='flex justify-between border-b py-3'>
                            <div>
                                Pengiriman
                            </div>
                            <div>
                                J&T
                            </div>
                        </div>
                        <div className='flex justify-between py-3'>
                            <div className='font-bold'>
                                Total
                            </div>
                            <div className='font-bold'>
                                Rp. xxx.xxx.xxx
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}