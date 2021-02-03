import React from 'react';
import PropTypes from 'prop-types';
import CatFact from './CatFact';
import { Link } from 'react-router-dom';

const CatFactList = ({ catFacts }) => {
  const catElements = catFacts.map(catFact => (
    <Link
      to={`details/${catFact.breed}`}
      key={catFact.breed}>
      <li key={catFact.breed}>
        <CatFact {...catFact} />
      </li>
      
    </Link>
  ));

  return (
    <ul>
      {catElements}
    </ul>
  );
};

CatFactList.propTypes = {
  catFacts: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CatFactList;
