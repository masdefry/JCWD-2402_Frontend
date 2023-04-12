import { VscHeart } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

export default function ProductCard(props) {
	return (
		<>
			<li className='product-card border-[1px] border-white hover:border-black'>
				<div className='product-card-container'>
					<div className='product-card-wrapper'>
						<a href='#' className='product-card-content'>
							<div className='top-container relative'>
								<Link to={`/detail/${props.data.id}`}>
									<div className='product-picture'>
										<img src={`${props.data?.type[0]?.images?.main_images}`} alt=''></img>
									</div>
								</Link>
								<div className='wishlist absolute top-4 right-4'>
									<button className='wishlist-button'>
										<VscHeart className='text-xl' />
									</button>
								</div>
								<div className='new-icon absolute top-4 left-0 bg-white px-1 py-1 -rotate-90 italic'>
									BARU
								</div>
							</div>
							<div className='bottom-container px-2 py-3'>
								<div className='product-details'>
									<div className='product-details-top text-xs text-gray-500 mb-3'>
										<p>{props.data.category.category}</p>
									</div>
									<div className='product-details-main text-xs'>
										<p className='product-name mb-1'>{props.data.name}</p>
										<p className='product-price'>
											Rp. {props.data.price?.toLocaleString('id-ID')}
										</p>
									</div>
								</div>
								<div className='product-details-bottom text-xs text-gray-500 mt-6'>
									<div className='colors'>{props.data.type.length} warna</div>
								</div>
							</div>
						</a>
					</div>
				</div>
			</li>
		</>
	);
}
