import React from 'react';
import PropTypes from 'prop-types';

const Deck = (props) => {
  const { deck } = props;
  return (
        <>
            <section className="deck">
                <header><h2>{deck.title}</h2></header>
                {props.children}
            </section>
        </>
  );
};

Deck.propTypes = {
  deck: PropTypes.object,
  children: PropTypes.object,
};
export default Deck;
