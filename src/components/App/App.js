import React from 'react';
import {Route} from 'react-router-dom';

import Page from "../Page/page";
import content from "../../content";
import About from "../About/About"

const App = (props) => {
    return (
        <>
            <Page content={content} />;
            <Route exact path="/" component={Page}/>
            <Route exact path="/about" component={About}/>

        </>
        );
};

export default App;