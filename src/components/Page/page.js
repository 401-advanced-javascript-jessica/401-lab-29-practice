import React from 'react';
import PropTypes from 'prop-types';
import Deck from '../Deck/Deck';
import Card from '../Card/Card';

const Page = (props) => {
  const content = props.content || [];

  return (
      <>
        {content.map((deck, i) => (
            <Deck deck={deck} key={i}>
              {deck.records.map((card, j) => <Card card={card} key={j}/>)}
            </Deck>
        ))}
        </>
  );
};

Page.propTypes = {
  content: PropTypes.object,
};

export default Page;
