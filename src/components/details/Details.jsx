import React, { Component } from 'react';
import { getCatFacts } from '../../services/catFactsApi';
import './Details.css';
import CatFact from '../cats/CatFact';

export default class Details extends Component {
    state = {
      catFact: null
    }
  
    componentDidMount() {
      const index = this.props.match.params.index;
      getCatFacts()
        .then(catFacts => this.setState({ catFact: catFacts[index] }));
    }
  
    render() {
      const { catFact } = this.state;
      if(!catFact) return <h1>Loading</h1>;
      return (
        <>
          <section>
            Here are the cat details you desire!
          </section>
          <CatFact className="cat-fact"
            breed={catFact.breed}
            country={catFact.country}
            coat={catFact.coat}
            pattern={catFact.pattern}
          />
        </>
      );
    }
}
