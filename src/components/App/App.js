import React from 'react';
import {Route} from 'react-router-dom';

import Page from "../Page/page";
import content from "../../content";
import About from "../About/About"
import Header from '../Header/Header'

const App = (props) => {
    return (
        <>
            <Header />
            <Route exact path="/" component={Page}/>
            <Route exact path="/about" component={About}/>
            <Page content={content} />;
        </>
        );
};

export default App;