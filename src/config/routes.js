import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import About from '../components/About';
import BugContainer from '../containers/BugContainer';

export default (
    <Switch>  
        <Route path="/about" component={About}/>
        <Route path="/bugs" component={ BugContainer }/>         
        <Route path="/" component={ Home }/>       
    </Switch>
)