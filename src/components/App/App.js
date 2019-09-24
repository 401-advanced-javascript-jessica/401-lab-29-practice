import React from 'react';
import { Route } from 'react-router-dom';

import Page from '../Page/page';
import content from '../../content';
import About from '../About/About';
import Header from '../Header/Header';

const App = () => {
  return (
        <>
            <Header />
            <Route exact path="/" render={(props) => <Page {...props} content={content} />}/>
            <Route exact path="/about" component={About}/>
        </>
  );
};

export default App;
