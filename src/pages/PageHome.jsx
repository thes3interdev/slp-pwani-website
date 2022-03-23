import UtilityTabTitle from '../utilities/UtilityTabTitle';
import NavigationHeader from '../components/NavigationHeader';
import SectionHero from '../components/SectionHero';
import SectionDestinations from '../components/SectionDestinations';
import SectionSearch from '../components/SectionSearch';
import SectionSelects from '../components/SectionSelects';

const PageHome = () => {
	UtilityTabTitle('Pwani Travel | Superior Software Solutions');

	return (
		<div name="Home">
			<NavigationHeader />
			<SectionHero />
			<SectionDestinations />
			<SectionSearch />
			<SectionSelects />
		</div>
	);
};

export default PageHome;
