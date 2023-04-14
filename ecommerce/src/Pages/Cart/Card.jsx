export default function Card(props){
    return(
        props.data.map((value, index) => {
            return(
                <div className='flex mt-10 border-t-[0.3px]'>
                    <div className='flex gap-10 px-3 py-3'>
                        <img src={value?.type?.images?.main_images} 
                            className='w-[150px] h-[150px]'
                        />
                        <div>   
                            <div className='flex flex-col'>
                                <div className='flex flex-col gap-1'>
                                    <h1 className='font-bold'>
                                        {value?.product?.name}
                                    </h1>
                                    <h6 className='text-sm'>
                                        Category: Shoes
                                    </h6>
                                    <h6 className='text-sm'>
                                        Color: {value.type.color}
                                    </h6>
                                    <h6 className='text-sm'>
                                        Size: {value.size}
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <button className='bg-gray-900 w-[30px] h-[30px] pb-1 text-white'>
                                -
                            </button>
                                <span className='px-3'>
                                   {value?.quantity}
                                </span>
                            <button className='bg-gray-900 w-[30px] h-[30px] pb-1 text-white'>
                                +
                            </button>
                        </div>
                        <div className='flex justify-end items-center'>
                            <h6>
                                Rp.{value?.product?.price?.toLocaleString()}
                            </h6>
                        </div>
                    </div>
                </div>
            )
        })
    )
}