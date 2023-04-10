import { TbTruckDelivery } from 'react-icons/tb';
import { BsEnvelope } from 'react-icons/bs';
import { BsCheck2 } from 'react-icons/bs';
import { IoReturnUpBackSharp } from 'react-icons/io5';
import { IoChevronDownOutline } from 'react-icons/io5';
import { BsPlusLg } from 'react-icons/bs';
import { AiOutlineDown } from 'react-icons/ai';
import CardComponent from './CardComponent';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

// Flowbite
import { Dropdown } from 'flowbite-react';

// Url
import UrlAPI from '../../Supports/Constants/URLAPI';

export default function ProductList() {

	// const _selectedCategory = useRef()

	const [data, setData] = useState([])
	const [categoryList, setCategoryList] = useState([])

	const onGetData = async() => {
		try {
			const response = await axios.get(`${UrlAPI}/products?_expand=category`)
			console.log(response.data)
			setData(response.data)
		} catch (error) {
			
		}
	}

	const onGetCategory = async() => {
		try {
			const response = await axios.get(`${UrlAPI}/categories`)
			console.log(response.data)
			setCategoryList(response.data)
		} catch (error) {
			
		}
	}

	const onFilterCategory = async(_selectedCategory) => {
		try {
			const response = await axios.get(`${UrlAPI}/products?_expand=category&categoryId=${_selectedCategory}`)
			console.log(response)
			setData(response.data)
		} catch (error) {
			
		}
	}

	useEffect(() => {
		onGetData()
		onGetCategory()
	}, [])

	return (
		<div className='shop-container mt-[87px]'>
			<div className='headerUsp flex justify-center border-b-2'>
				<div className='usp flex gap-10'>
					<button className='usp-1 flex gap-2 items-center text-sm px-2 py-2'>
						<div className='deliveryicon'>
							<TbTruckDelivery className='text-xl' />
						</div>
						<div className='item-description'>
							GRATIS ONGKIR UNTUK PESANAN MIN. 900RB
						</div>
					</button>
					<button className='usp-2 flex gap-2 items-center text-sm px-2 py-2'>
						<div className='message-icon'>
							<BsEnvelope className='text-xl' />
						</div>
						<div className='item-description'>CHAT DENGAN KAMI</div>
					</button>
					<button className='usp-3 flex gap-2 items-center text-sm px-2 py-2'>
						<div className='check-icon'>
							<BsCheck2 className='text-xl' />
						</div>
						<div className='item-description'>
							CICILAN AKULAKU TERSEDIA SEKARANG!
						</div>
					</button>
				</div>
			</div>
			<main className='categorypage'>
				<section className='Category Page'>
					<div className='categorypage-wrapper'>
						<div className='categorypage-productlist-wrapper my-3 mx-20'>
							<article className='catergory-detail'>
								<div className='category-detail-wrapper'>
									<ul className='flex'>
										<li className='mr-4'>
											<button className='flex gap-2 items-center font-bold tracking-widest underline'>
												<span>
													<IoReturnUpBackSharp />
												</span>
												KEMBALI
											</button>
										</li>
										<li className='mr-1'>
											<a href=''>
												<span className="after:content-['_/']">
													<u>Pria</u>
												</span>
											</a>
										</li>
										<li>
											<a href=''>
												<span>Shop</span>
											</a>
										</li>
									</ul>
								</div>
								<div className='category-details-name-wrapper'>
									<div className='category-details-name flex items-end gap-3 py-4'>
										<h1 className='category-name text-4xl font-semibold italic'>
											SEPATU
										</h1>
										<div className='category-details-count flex items-end'>
											[1442]
										</div>
									</div>
								</div>
							</article>
							<div class='menu-overlay-container mt-5 flex justify-between border-[1px] border-black'>
								<div className='menu-overlay-wrapper-1 flex h-[55px]'>
									<div className='title-wrapper flex-column items-center mx-2 my-2 border-[1px] border-white hover:border-black cursor-pointer'>
										<Dropdown
											label="Category"
											dismissOnClick={false}
											class='bg-white border-[1px] border-black'
											>
											{
												categoryList.map((value, index) => {
													return(
														<Dropdown.Item 
														onClick={() => onFilterCategory(value.id)}
														key={index}>
															{value.category}
														</Dropdown.Item>
													)
												})
											}
										</Dropdown>
									</div>
									<div className='title-wrapper flex items-center mx-2 my-2 border-[1px] border-white hover:border-black cursor-pointer'>
										<div className='title flex items-center border-box gap-1 py-2 px-3'>
											<span className='text-[13px]'>UKURAN</span>
											<IoChevronDownOutline className='text-[10px]' />
										</div>
									</div>
									<div className='title-wrapper flex items-center mx-2 my-2 border-[1px] border-white hover:border-black cursor-pointer'>
										<div className='title flex items-center border-box gap-1 py-2 px-3'>
											<span className='text-[13px]'>DISKON</span>
											<IoChevronDownOutline className='text-[10px]' />
										</div>
									</div>
									<div className='title-wrapper flex items-center mx-2 my-2 border-[1px] border-white hover:border-black cursor-pointer'>
										<div className='title flex items-center border-box gap-1 py-2 px-3'>
											<span className='text-[13px]'>
												CORPORATE MARKETING LINE
											</span>
											<IoChevronDownOutline className='text-[10px]' />
										</div>
									</div>
								</div>
								<div className='menu-overlay-wrapper-1 flex gap-3'>
									<div className='title-wrapper flex items-center mx-2 my-2 border-[1px] border-white hover:border-black cursor-pointer'>
										<div className='title flex items-center border-box gap-1 py-2 px-3'>
											<span className='text-[13px]'>LEBIH BANYAK FILTER</span>
											<BsPlusLg className='text-[10px]' />
										</div>
									</div>
									<div className='title-wrapper flex items-center mx-2 my-2 border-[1px] border-white hover:border-black cursor-pointer'>
										<div className='title flex items-center border-box gap-1 py-2 px-3'>
											<span className='text-[13px]'>RECOMMENDED</span>
											<IoChevronDownOutline className='text-[10px]' />
										</div>
									</div>
								</div>
							</div>
							<div className='product-list-container mt-5 px-3 mb-16'>
								<div className='product-list-wrapper flex justify-center'>
									<ul className='grid grid-cols-4 gap-4'>
										{
											data.map((value, index) => {
												return(
													// data = {name: ..., price: ..., category_id: ..., dst}
													<CardComponent key={index} data={value} />
												)
											})
										}
									</ul>
								</div>
							</div>
						</div>
					</div>
					<nav className='navigasi-daftar-produ flex justify-center'>
						<div className='navigation-container flex items-center justify-center relative w-[87%] mb-24'>
							<div className='middle-pagination flex items-center gap-3'>
								<span>Halaman</span>
								<div className='drop-down'>
									<div className='drop-down-pagination-container'>
										<div className='drop-down-pagination-wrapper px-6 py-3 border-[1px] border-black'>
											<button className='flex items-center gap-1'>
                        <span>1</span>
                        <AiOutlineDown/>
                      </button>
										</div>
									</div>
								</div>
                <span>dari 60</span>
							</div>
              <div className='next hover:bg-black hover:text-white underline absolute right-0'>
                <a href=''>
                  <span>Next</span>
                </a>
              </div>
						</div>
					</nav>
				</section>
			</main>
		</div>
	);
}
