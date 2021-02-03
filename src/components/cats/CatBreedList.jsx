import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CatBreed from './CatBreed';

const CatBreedList = ({ catFacts }) => {
  const catElements = catFacts.map((catFact, index) => (
    <Link
      to={`details/${index}`}
      key={catFact.breed}>
      <li>
        <CatBreed {...catFact} />
      </li>
    </Link>
  ));

  return (
    <ul>
      {catElements}
    </ul>
  );
};

CatBreedList.propTypes = {
  catFacts: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CatBreedList;
