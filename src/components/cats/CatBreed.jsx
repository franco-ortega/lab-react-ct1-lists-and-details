import React from 'react';
import PropTypes from 'prop-types';

const CatBreed = ({ breed }) => (
  <>
    <h1>{breed}</h1>
  </>
);

CatBreed.propTypes = {
  breed: PropTypes.string.isRequired,
};

export default CatBreed;
