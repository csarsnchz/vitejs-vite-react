import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, name }) => {
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      <h3>{subTitle}</h3>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  name: PropTypes.string,
};

FirstApp.defaultProps = {
  subtitle: 'Testing',
  name: 'Csar',
};
