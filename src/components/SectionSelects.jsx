import BoraBora_1 from '../assets/borabora-1.jpg';
import BoraBora_2 from '../assets/borabora-2.jpg';
import Maldives_1 from '../assets/maldives-1.jpg';
import Maldives_2 from '../assets/maldives-2.jpg';
import Maldives_3 from '../assets/maldives-3.jpg';
import KeyWest from '../assets/keywest.jpg';
import SectionSelectsCard from './SectionSelectsCard';

const SectionSelects = () => {
	return (
		<div className="mx-auto grid max-w-7xl gap-4 px-4 py-16 sm:grid-cols-2 lg:grid-cols-3">
			<SectionSelectsCard destinationImage={BoraBora_1} destinationName="Bora Bora" />
			<SectionSelectsCard destinationImage={Maldives_1} destinationName="Maldives" />
			<SectionSelectsCard destinationImage={BoraBora_2} destinationName="Mombasa" />
			<SectionSelectsCard destinationImage={Maldives_2} destinationName="Zanzibar" />
			<SectionSelectsCard destinationImage={KeyWest} destinationName="Key West" />
			<SectionSelectsCard destinationImage={Maldives_3} destinationName="Antigua" />
		</div>
	);
};

export default SectionSelects;
