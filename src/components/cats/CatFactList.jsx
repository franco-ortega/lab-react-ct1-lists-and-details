import React from 'react';
import PropTypes from 'prop-types';
import CatFact from './CatFact';
import { Link } from 'react-router-dom';

const CatFactList = ({ catFacts }) => {
    // console.log(catFacts);
  const catElements = catFacts.map((catFact, index) => (
    <Link
      to={`details/${index}`}
      key={catFact.breed}>
      <li>{index}
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
