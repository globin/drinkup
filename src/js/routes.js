import React from 'react';
import { Route } from 'react-router';

import Main from 'base/main';
import People from 'people/people';
import Drinks from 'drinks/drinks';
import DrinkPersonTable from 'drink-person-table/drinkPersonTable';
import Payment from 'payment/payment';

const routes = (
    <Route path='/' component={Main}>
        <Route path='people' component={People}/>
        <Route path='drinks' component={Drinks}/>
        <Route path='drink-person-table' component={DrinkPersonTable}/>
        <Route path='payment' component={Payment}/>
    </Route>
);

export default routes;

