import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const NavigationFooter = () => {
	return (
		<div className="w-full bg-gray-100 py-16">
			<div className="mx-auto flex max-w-7xl flex-col px-4 hover:cursor-pointer">
				<div className="items-center justify-between text-center sm:flex">
					<h1 className="uppercase">Pwani</h1>
					<div className="my-4 flex w-full justify-between sm:max-w-[280px]">
						<FaFacebook className="icon" />
						<FaTwitter className="icon" />
						<FaInstagram className="icon" />
					</div>
				</div>
				<div className="flex justify-between ">
					<ul className="lg:flex">
						<li>Partners</li>
						<li>Careers</li>
						<li>News</li>
						<li>Advertisment</li>
					</ul>
					<ul className="text-right lg:flex">
						<li>Destinations</li>
						<li>Travel</li>
						<li>View</li>
						<li>Book</li>
						<li>About</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default NavigationFooter;
