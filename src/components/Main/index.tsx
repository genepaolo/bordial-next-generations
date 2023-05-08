import React from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from '../../pages/Home';
import IntakeRequests from '../../pages/IntakeRequests';
import Services from '../../pages/Services';
import ContactUs from '../../pages/ContactUs';
import Career from '../../pages/Career';
import CovidUpdate from '../../pages/CovidUpdate';
import Testimonials from "../../pages/Testimonials";
import Unavailable from "../../pages/Unavailable";
import {prefix} from "../../api/ports";
import "bootstrap/dist/js/bootstrap.min.js";

const Main = () => {
    return (
        <BrowserRouter>
            <Switch> 
                <Route exact path={prefix + '/'}component={Home} ></Route>
                <Route exact path={prefix +'/services'} component={Services} ></Route>
                <Route exact path={prefix +'/contact-us'} component={ContactUs} ></Route>
                <Route exact path={prefix +'/intake-requests'} component={IntakeRequests} ></Route>
                <Route exact path={prefix +'/career'} component={Career} ></Route>
                <Route exact path={prefix +'/covid-update'} component={CovidUpdate} ></Route>
                <Route exact path={prefix +'/testimonials'} component={Testimonials} ></Route>
                <Route exact path={prefix +'/unavailable'} component={Unavailable} ></Route>
                <Route component={Unavailable} ></Route>
            </Switch>
        </BrowserRouter>
        
    );
}

export default Main;