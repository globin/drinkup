import React from 'react';
import { Route } from 'react-router';

import Main from 'base/main';
import People from 'people/people';
import Drinks from 'drinks/drinks';
import DrinkPersonTable from 'drink-person-table/drinkPersonTable';

const routes = (
    <Route handler={Main}>
        <Route name='people' handler={People}/>
        <Route name='drinks' handler={Drinks}/>
        <Route name='drink-person-table' handler={DrinkPersonTable}/>
    </Route>
);

export default routes;

