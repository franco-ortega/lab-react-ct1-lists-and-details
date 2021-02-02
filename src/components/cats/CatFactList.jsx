import React from 'react';
import PropTypes from 'prop-types';
import CatFact from './CatFact';

const CatFactList = ({ catFacts }) => {
  const catElements = catFacts.map(catFact => (
    <li key={catFact.breed}>
      <CatFact {...catFact} />
    </li>
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
