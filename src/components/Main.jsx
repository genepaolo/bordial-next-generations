import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import IntakeRequests from '../pages/IntakeRequests';
import MissionStatement from '../pages/MissionStatement';
import Services from '../pages/Services';
import ContactUs from '../pages/ContactUs';
import Career from '../pages/Career';
import CovidUpdate from '../pages/CovidUpdate';

const Main = () => {
    return (
        <BrowserRouter>
            <Switch> {/* The Switch decides which component to show based on the current URL.*/}
                <Route exact path='/' component={Home} ></Route>
                <Route exact path='/mission-statement' component={MissionStatement} ></Route>
                <Route exact path='/services' component={Services} ></Route>
                <Route exact path='/contact-us' component={ContactUs} ></Route>
                <Route exact path='/intake-requests' component={IntakeRequests} ></Route>
                <Route exact path='/career' component={Career} ></Route>
                <Route exact path='/covid-update' component={CovidUpdate} ></Route>
            </Switch>
        </BrowserRouter>
        
    );
}

export default Main;