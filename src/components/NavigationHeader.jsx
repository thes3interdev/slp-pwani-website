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
		<div className="flex h-20 items-center justify-between px-4">
			{/** main menu start */}
			<div>
				<h1 onClick={handleNavigation} className={logo ? 'hidden' : 'block'}>
					Pwani
				</h1>
			</div>
			<ul className="hidden md:flex">
				<li>Home</li>
				<li>Destinations</li>
				<li>Travel</li>
				<li>View</li>
				<li>Book</li>
			</ul>
			<div className="hidden space-x-2 md:flex">
				<BsPerson size={21} />
				<BiSearch size={21} />
			</div>
			{/** main menu end */}

			{/** hamberger menu start */}
			<div onClick={handleNavigation} className="z-10 md:hidden">
				{navigation ? <AiOutlineClose size={21} /> : <HiOutlineMenuAlt4 size={21} />}
			</div>
			{/** hamberger menu end */}

			{/** mobile menu start */}
			<div
				onClick={handleNavigation}
				className={
					navigation
						? 'absolute left-[0] top-0 flex w-full flex-col bg-gray-100/90 px-4 py-8'
						: 'absolute left-[-100%]'
				}
			>
				<h1 className="uppercase">Pwani</h1>
				<ul>
					<li className="border-b">Home</li>
					<li className="border-b">Destinations</li>
					<li className="border-b">Travel</li>
					<li className="border-b">View</li>
					<li className="border-b">Book</li>
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
