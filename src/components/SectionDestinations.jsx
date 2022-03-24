import BoraBora_1 from '../assets/borabora-1.jpg';
import BoraBora_2 from '../assets/borabora-2.jpg';
import Maldives_1 from '../assets/maldives-1.jpg';
import Maldives_2 from '../assets/maldives-2.jpg';
import KeyWest from '../assets/keywest.jpg';

const SectionDestinations = () => {
	return (
		<div className="mx-auto max-w-7xl py-16 px-4 text-center">
			{/** header section start */}
			<h1>All Inclusive Resorts</h1>
			<p className="py-2 uppercase">In The Best Beaches On The Planet</p>
			{/** header section end */}

			{/** destination images section start */}
			<div className="grid grid-rows-none gap-2 py-4 md:grid-cols-5 md:gap-4">
				<img
					className="col-span-2 row-span-2 h-full w-full rounded-md object-cover object-center md:col-span-3"
					src={BoraBora_1}
					alt="Bora Bora"
				/>
				<img
					className="h-full w-full rounded-md object-cover object-center"
					src={BoraBora_2}
					alt="Bora Bora"
				/>
				<img
					className="h-full w-full rounded-md object-cover object-center"
					src={Maldives_1}
					alt="Maldives"
				/>
				<img
					className="h-full w-full rounded-md object-cover object-center"
					src={Maldives_2}
					alt="Maldives"
				/>
				<img
					className="h-full w-full rounded-md object-cover object-center"
					src={KeyWest}
					alt="Key West"
				/>
			</div>
			{/** destination images section end */}
		</div>
	);
};

export default SectionDestinations;
