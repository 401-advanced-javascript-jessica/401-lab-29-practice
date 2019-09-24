import React from 'react';
import Deck from '../Deck/Deck'
import Card from "../Card/Card";

const Page = (props) => {

  const content = props.content || [];

  return (
      <>
        {content.map( (deck,i) => (
            <Deck deck={deck}>
              {deck.records.map( (card) =>
                  <Card card={card}/>
              )}
            </Deck>
        ))}
        </>
  )
};

export default Page;
