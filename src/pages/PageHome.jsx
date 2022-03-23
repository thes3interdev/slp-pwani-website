import UtilityTabTitle from '../utilities/UtilityTabTitle';
import NavigationHeader from '../components/NavigationHeader';
import SectionHero from '../components/SectionHero';
import SectionDestinations from '../components/SectionDestinations';

const PageHome = () => {
	UtilityTabTitle('Pwani Travel | Superior Software Solutions');

	return (
		<div name="Home">
			<NavigationHeader />
			<SectionHero />
			<SectionDestinations />
		</div>
	);
};

export default PageHome;
