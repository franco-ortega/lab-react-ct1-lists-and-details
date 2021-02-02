import React from 'react';
import PropTypes from 'prop-types';

const CatFact = ({ breed, country, coat, pattern }) => (
  <>
    <h1>{breed}</h1>
    <p>{country}</p>
    <p>{coat}</p>
    <p>{pattern}</p>
  </>
);

CatFact.propTypes = {
  breed: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  coat: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired
};

export default CatFact;
