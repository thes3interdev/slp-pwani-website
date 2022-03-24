import { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const NavigationHeader = () => {
	const [navigation, setNavigation] = useState(false);
	const [logo, setLogo] = useState(false);

	const handleNavigation = () => {
		setNavigation(!navigation);
		setLogo(!logo);
	};

	return (
		<div className="absolute z-10 flex h-20 w-full items-center justify-between px-4 text-white">
			{/** main menu start */}
			<div>
				<h1 onClick={handleNavigation} className={logo ? 'hidden' : 'block'}>
					Pwani
				</h1>
			</div>
			<ul className="hidden hover:cursor-pointer md:flex">
				<li>Destinations</li>
				<li>Travel</li>
				<li>View</li>
				<li>Book</li>
				<li>About</li>
			</ul>
			<div className="hidden space-x-2 md:flex">
				<BsPerson size={21} />
				<BiSearch size={21} />
			</div>
			{/** main menu end */}

			{/** hamberger menu start */}
			<div onClick={handleNavigation} className="z-10 md:hidden">
				{navigation ? (
					<AiOutlineClose size={21} className="text-black" />
				) : (
					<HiOutlineMenuAlt4 size={21} />
				)}
			</div>
			{/** hamberger menu end */}

			{/** mobile menu start */}
			<div
				onClick={handleNavigation}
				className={
					navigation
						? 'absolute left-[0] top-0 flex w-full flex-col bg-gray-100/90 px-4 py-6 text-black'
						: 'absolute left-[-100%]'
				}
			>
				<h1>Pwani</h1>
				<ul>
					<li className="border-b border-gray-300">Destinations</li>
					<li className="border-b border-gray-300">Travel</li>
					<li className="border-b border-gray-300">View</li>
					<li className="border-b border-gray-300">Book</li>
					<li className="border-b border-gray-300">About</li>
				</ul>
				<div className="flex flex-col">
					<button className="my-5">Search</button>
					<button className="">Account</button>
				</div>
				<div className="my-5 flex justify-between">
					<FaFacebook className="icon" />
					<FaTwitter className="icon" />
					<FaInstagram className="icon" />
				</div>
			</div>
			{/** mobile menu end */}
		</div>
	);
};

export default NavigationHeader;
