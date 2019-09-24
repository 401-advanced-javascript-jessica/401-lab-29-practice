import React from 'react';

const Deck = (props) => {
console.log(props);
    let deck = props.deck;
    return (
        <>
            <section className="deck">
                <header><h2>{deck.title}</h2></header>
                {props.children}
            </section>
        </>
    );
};

export default Deck;