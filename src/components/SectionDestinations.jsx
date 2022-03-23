import BoraBora_1 from '../assets/borabora-1.jpg';
import BoraBora_2 from '../assets/borabora-2.jpg';
import Maldives_1 from '../assets/maldives-1.jpg';
import Maldives_2 from '../assets/maldives-2.jpg';
import KeyWest from '../assets/keywest.jpg';

const SectionDestinations = () => {
	return (
		<div className="mx-auto max-w-[1240px] py-16 px-4 text-center">
			{/** header section start */}
			<h1>All Inclusive Resorts</h1>
			<p className="py-2">On The Caribbean's Best Beaches</p>
			{/** header section end */}

			{/** destination images section start */}
			<div className="grid grid-rows-none gap-2 py-4 md:grid-cols-5 md:gap-4">
				<img
					className="object-coverobject-center col-span-2 row-span-2 h-full w-full rounded-md md:col-span-3"
					src={BoraBora_1}
					alt="Bora Bora"
				/>
				<img
					className="object-coverobject-center h-full w-full rounded-md"
					src={BoraBora_2}
					alt="Bora Bora"
				/>
				<img
					className="object-coverobject-center h-full w-full rounded-md"
					src={Maldives_1}
					alt="Maldives"
				/>
				<img
					className="object-coverobject-center h-full w-full rounded-md"
					src={Maldives_2}
					alt="Maldives"
				/>
				<img
					className="object-coverobject-center h-full w-full rounded-md"
					src={KeyWest}
					alt="Key West"
				/>
			</div>
			{/** destination images section end */}
		</div>
	);
};

export default SectionDestinations;
