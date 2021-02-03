import React from 'react';
import PropTypes from 'prop-types';

const CatBreed = ({ breed }) => (
  <h3>{breed}</h3>
);

CatBreed.propTypes = {
  breed: PropTypes.string.isRequired,
};

export default CatBreed;
