import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GrStar } from 'react-icons/gr';
import { RxRulerHorizontal } from 'react-icons/rx';
import { RxEnvelopeClosed } from 'react-icons/rx';
import { VscHeart } from 'react-icons/vsc';
import { TbTruckDelivery } from 'react-icons/tb';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { AiOutlineCheck } from 'react-icons/ai';

// Components
import Button from '../../Components/Button/Button';
import UrlAPI from './../../Supports/Constants/URLAPI';
import axios from 'axios';

export default function ProductDetail() {

	const {id} = useParams()

	const [data, setData] = useState(null)

	const onGetData = async() => {
		try {
			const response = await axios.get(`${UrlAPI}/products/${id}`)
			setData(response.data)
		} catch (error) {
			
		}
	}

	useEffect(() => {
		onGetData()
	}, [])

	return (
		<div className='product-page-container mt-[89px]'>
			<div className='product-page-wrapper flex'>
				<section className='left-section flex-3 border-r-2 w-[70%]'>
					<div className='galeri-full'>
						<div className='galeri'>
							<div>
								<img
									className='h-[600px] w-full object-contain'
									src={'https://www.adidas.co.id/media/catalog/product/cache/b4d35d4f8c43032a04e969b4c3a6af8a/h/q/hq6709_2_footwear_photography_side20lateral20view_grey.jpg'}
									alt='shoes'
								/>
							</div>
							<div className='product-color-image-container py-4 border-b-2'>
								<div className='product-color-image-wrapper flex gap-6 justify-center items-center'>
									<div className='text-[11px] font-semibold text-center'>
										{data?.type?.length} WARNA<br></br>TERSEDIA
									</div>
									<div className='product-color-image flex gap-3'>
										{
											data?.type?.map((value, index) => {
												return(
													<img
														src={value?.images?.main_images}
														alt='shoes'
														className='w-[60px] cursor-pointer'
													/>
												)
											})
										}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='product-page-content px-16 py-12'>
						<section className='product-information'>
							<div className='product-information-wrapper'>
								<div className='product-information-name'>
									<h5 className='font-bold text-[30px]'>BLACK</h5>
								</div>
								<div className='product-information-text mt-3'>
									<h5 className='font-medium text-[20px] italic'>
										TAMPILAN DAN SENSASI KLASIK DARI SAMBA YANG AUTENTIK.
									</h5>
								</div>
								<div className='product-short-description mt-3'>
									<p>
										Diciptakan untuk sepak bola indoor, Samba menjadi ikon
										street style yang tak lekang oleh waktu. Sepatu ini tetap
										mempertahankan warisannya dengan upper kulit lembut dan
										overlay berbahan suede.
									</p>
								</div>
								<div className='detail'>
									<div className='product-information-specification pt-[48px]'>
										<h5 className='text-[30px] font-bold'>SPESIFIKASI</h5>
										<div className='specification-wrapper flex gap-3'>
											<div className='specification'>
												<ul className='list-disc px-20'>
													<li>Regular fit</li>
													<li>
														Upper berbahan kulit full grain dengan suede
														bertekstur dan detail gold foil
													</li>
													<li>Outsole berbahan karet gum</li>
												</ul>
											</div>
											<div className='specification'>
												<ul className='list-disc px-20'>
													<li>Menggunakan tali sepatu</li>
													<li>
														Bagian lining dibuat dari bahan kulit sintetis;
														Cupsole berbahan karet gum
													</li>
													<li>Kode produk: B75806</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
						<section className='review-section pt-[48x]'>
							<div className='product-review-wrapper pt-[16px]'>
								<div className='product-review-content'>
									<div className='summary'>
										<div className='my-[25px]'>
											<h5 className='text-[30px] font-bold mb-[20px]'>
												Silahkan masuk untuk menulis ulasan
											</h5>
											<span>
												Hanya pengguna terdaftar yang dapat menulis ulasan,
											</span>
											<a href=''>
												{' '}
												<u>masuk</u>
											</a>
											<span> atau</span>
											<a href=''>
												{' '}
												<u>registrasi</u>
											</a>
										</div>
										<div className='product-review-button'>
											<h4 className='text-[30px] font-bold mb-[20px]'>
												JADILAH YANG PERTAMA MENGULAS PRODUK INI
											</h4>
											<Button
												borderColor='border-[#767677]'
												backgroundColor='bg-[#767677]'
												value='TULIS ULASAN PERTAMA'
											/>
										</div>
									</div>
									<div className='rating-container mt-[50px]'>
										<div className='rating-wrapper flex gap-8 border-t-4 border-b-2 py-[24px] px-[32px]'>
											<div className='flex items-start'>
												<div className='rating-stars flex-1 flex items-center gap-4'>
													<p>Quality</p>
													<div className='flex items-center gap-1'>
														<GrStar className='text-yellow-300 text-xl' />
														<h3 className='text-xl'>
															4.5
														</h3>
													</div>
												</div>
											</div>
											<div className='rating-review flex-2'>
												<div className='review-product-wrapper flex justify-between items-center mb-[16px] relative bottom-[6px]'>
													<h4 className='text-[30px] font-bold'>
														REVIEW SAMBA OG
													</h4>
												</div>
												<p>
													Sesuai dengan harapan dan nyaman dipakai. Salah satu
													variant dari adidas yang pengen dikoleksi. Sayang
													lambang adidas og di bagian belakang tumit tidak
													ada,seandainya ada,seperti adidasdragon, pasti lebih
													keren lagi. Btw,adidas dragon kapan ada lagi yah?
												</p>
												<p className='mt-[8px]'>
													<strong>-Andi </strong>
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
				</section>
				<section className='right-section w-full flex-1 p-[40px]'>
					<div className='product-description mb-[30px]'>
						<div className='product-description-preheader flex justify-between mb-[30px]'>
							<div className='product-description-label text-[14px]'>
								{' '}
								Pria • Lifestyle{' '}
							</div>
							<div className='product-description-button text-[14px]'>
								<a href='' className='underline'>
									Tulis Ulasan
								</a>
							</div>
						</div>
						<h1 className='text-[35px] italic mb-[20px]'>{data?.name}</h1>
						<div className='product-description-color-price'>
							<h5 className='product-description-color-label text-[12px] mb-[20px]'>
								{data?.type[0]?.color}
							</h5>
							<div className='product-description-price-label font-bold'>
								Rp. {data?.price?.toLocaleString('id-ID')}
							</div>
						</div>
					</div>
					<div className='size-description-wrapper'>
						<h5 className='size-chart-heading text-[11px] font-bold'>
							PILIH SIZE
						</h5>
						<div className='dropdown-size mt-[10px]'>
							{/* <SizeDropDown /> */}
						</div>
						<div className='text-[14px] text-red-600 font-bold mt-[10px]'>
							{data?.type[0]?.stock} Item
						</div>
						<div className='size-chart'>
							<div className='size-guide flex items-end gap-1 mt-[10px]'>
								<RxRulerHorizontal />
								<a
									href='#'
									className='text-[14px] font-semibold hover:bg-black hover:text-white underline'
								>
									PANDUAN UKURAN
								</a>
							</div>
							<div className='size-guide-link flex items-end gap-1 mt-[10px]'>
								<RxEnvelopeClosed />
								<a
									href='#'
									className='text-[14px] hover:bg-black hover:text-white underline'
								>
									Ukuran yang dipilih habis?
								</a>
							</div>
						</div>
					</div>
					<div className='flex gap-4 mt-[20px]'>
						<div className='send-button'>
							<Button
								borderColor='border-gray-900'
								backgroundColor='bg-gray-900'
								value='TAMBAH KE KERANJANG'
							/>
						</div>
						<button
							type='button'
							className='wishlist border-[1px] border-black px-3 py-2 flex items-center'
						>
							<VscHeart className='text-[20px]' />
						</button>
					</div>
					<div className='product-learn-more mt-[20px]'>
						<div className='free-delivery flex items-center gap-3'>
							<TbTruckDelivery />
							<div className='text-[14px]'>
								<a href='' className='underline'>
									Learn More
								</a>
								<br></br>
								<p>Free Delivery</p>
							</div>
						</div>
						<div className='free-delivery flex items-center gap-3 mt-[10px]'>
							<AiOutlineExclamationCircle />
							<div className='text-[14px]'>
								<a href='' className='underline'>
									Learn More
								</a>
								<br></br>
								<p>Not the Right Size or colors</p>
							</div>
						</div>
						<div className='free-delivery flex items-center gap-3 mt-[10px]'>
							<AiOutlineCheck />
							<div className='text-[14px]'>
								<a href='' className='underline'>
									Learn More
								</a>
								<br></br>
								<p>Read our Terms and Conditions</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
