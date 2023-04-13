import Button from "../../Components/Button/Button";

export default function Cart(){
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
                <div className='flex mt-10 border-t-[0.3px]'>
                    <div className='flex gap-10 px-3 py-3'>
                        <img src={'https://www.adidas.co.id/media/catalog/product/cache/3bec5fdb79d91223b1a151be2b21ce8d/b/7/b75806_sl_ecom.jpg'} 
                            className='w-[150px] h-[150px]'
                        />
                        <div>   
                            <div className='flex flex-col'>
                                <div className='flex flex-col gap-1'>
                                    <h1 className='font-bold'>
                                        SEPATU SAMBA OG
                                    </h1>
                                    <h6 className='text-sm'>
                                        Category: Shoes
                                    </h6>
                                    <h6 className='text-sm'>
                                        Color: Blue/Army/Black
                                    </h6>
                                    <h6 className='text-sm'>
                                        Size: 12.5
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <button className='bg-gray-900 w-[30px] h-[30px] pb-1 text-white'>
                                -
                            </button>
                                <span className='px-3'>
                                    1
                                </span>
                            <button className='bg-gray-900 w-[30px] h-[30px] pb-1 text-white'>
                                +
                            </button>
                        </div>
                        <div className='flex justify-end items-center'>
                            <h6>
                                Rp.xxx.xxx.xxx
                            </h6>
                        </div>
                    </div>
                </div>
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