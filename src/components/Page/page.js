import React from 'react';
import Deck from '../Deck/Deck'

const Page = (props) => {

  const content = props.content;

  return (
      <>
        <Deck content={content}/>
        </>
  )
};

export default Page;
