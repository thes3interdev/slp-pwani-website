import UtilityTabTitle from '../utilities/UtilityTabTitle';
import NavigationHeader from '../components/NavigationHeader';
import SectionHero from '../components/SectionHero';

const PageHome = () => {
	UtilityTabTitle('Pwani Travel | Superior Software Solutions');

	return (
		<div name="Home">
			<NavigationHeader />
			<SectionHero />
		</div>
	);
};

export default PageHome;
