import PropTypes from 'prop-types';

const UtilityTabTitle = (pageTitle) => {
	return (document.title = pageTitle);
};

UtilityTabTitle.propTypes = {
	pageTitle: PropTypes.string.isRequired,
};

export default UtilityTabTitle;
