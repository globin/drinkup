import React from 'react';
import { Route } from 'react-router';

import Main from 'components/main';
import People from 'people/people';
import Drinks from 'drinks/drinks';

const routes = (
    <Route handler={Main}>
        <Route name='people' handler={People}/>
        <Route name='drinks' handler={Drinks}/>
    </Route>
);

export default routes;

