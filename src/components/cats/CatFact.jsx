import React from 'react';
import PropTypes from 'prop-types';

const CatFact = ({ breed, country, coat, pattern }) => (
  <main>
    <h2>{breed}</h2>
    <p>Country: {country ? `${country}` : 'No country available.'}</p>
    <p>Coat: {coat ? `${coat}` : 'No coat available.'}</p>
    <p>Pattern: {pattern ? `${pattern}` : 'No pattern available.'}</p>
  </main>
);

CatFact.propTypes = {
  breed: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  coat: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired
};

export default CatFact;
