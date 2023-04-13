import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Dropdown } from 'flowbite-react';

import { useState } from 'react';

export default function SizeDropdown(props) {
	const [sizeChart, setSizeChart] = useState('hidden');

	const onAllHide = () => {
		setSizeChart('hidden');
	};

	return (
		<Dropdown
		label="Size"
		class='bg-white border-[1px] border-black'
		>
		{
			props?.size?.map((value, index) => {
				return(
					<Dropdown.Item 
					key={index}
					onClick={()=>props.funct(value)}>
						{value}
					</Dropdown.Item>
				)
			})
		}
	</Dropdown>
	);
}
