import UtilityTabTitle from '../utilities/UtilityTabTitle';
import NavigationHeader from '../components/NavigationHeader';
import SectionHero from '../components/SectionHero';
import SectionDestinations from '../components/SectionDestinations';
import SectionSearch from '../components/SectionSearch';

const PageHome = () => {
	UtilityTabTitle('Pwani Travel | Superior Software Solutions');

	return (
		<div name="Home">
			<NavigationHeader />
			<SectionHero />
			<SectionDestinations />
			<SectionSearch />
		</div>
	);
};

export default PageHome;
