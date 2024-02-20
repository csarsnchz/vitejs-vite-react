import PropTypes from 'prop-types';

export const FirstApp = ({ title, subtitle, name }) => {
  return (
    <>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  name: PropTypes.string,
};

FirstApp.defaultProps = {
  subtitle: 'Testing',
  name: 'Csar',
};
