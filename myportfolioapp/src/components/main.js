import React from 'react';
import {Switch,Route} from 'react-router-dom';
import LandingPage from './home';
import Resume from './resume';
import Contacts from './contacts';
import Projects from './projects';
import AboutMe from './aboutme';

const Main=() =>(
    <Switch>
        <Route exact path="/" component= {LandingPage}/>
        <Route path="/aboutme" component={AboutMe}/>
        <Route path="/contacts" component={Contacts}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/projects" component={Projects}/>
    </Switch>
)
export default Main;