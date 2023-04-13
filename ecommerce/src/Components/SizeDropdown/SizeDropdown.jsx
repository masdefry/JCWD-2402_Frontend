import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { useState } from 'react';

export default function SizeDropdown(props) {
	const [sizeChart, setSizeChart] = useState('hidden');

	const onAllHide = () => {
		setSizeChart('hidden');
	};

	return (
		<div className='harga-title-wrapper my-2 border-[1px] border-black cursor-pointer w-[100px] text-left'>
			<button
				onClick={() => {
					onAllHide();
					setSizeChart(sizeChart == 'hidden' ? '' : 'hidden');
				}}
				id='dropdownDefaultButton'
				data-dropdown-toggle='dropdown'
				className='cursor-pointer focus:outline-none font-medium text-sm px-4 py-2.5 text-center inline-flex items-center'
				type='button'
			>
				SIZE{' '}
				<svg
					className='w-4 h-4 ml-2'
					aria-hidden='true'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						stroke-linecap='round'
						stroke-linejoin='round'
						stroke-width='2'
						d='M19 9l-7 7-7-7'
					></path>
				</svg>
			</button>
			<div
				id='dropdown'
				className={`z-10 ${sizeChart} bg-white border-black divide-y divide-gray-100 dark:bg-gray-700`}
			>
				<ul
					className='py-2 text-sm text-gray-700 dark:text-gray-200'
					aria-labelledby='dropdownDefaultButton'
				>
					{
						props?.size?.map((value, index) => {
							return(
								<li key={index} onClick={props.funct(value)} className='border-[1px] py-1 text-center'>{value}</li>
							)
						})
					}
				</ul>
			</div>
		</div>
	);
}
