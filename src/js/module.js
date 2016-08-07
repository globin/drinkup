import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import routes from './routes';
import configureStore from './store/configureStore';
import '../styles/main.scss';

const store = configureStore();

injectTapEventPlugin();

render(
    <Provider store={store}>
        <Router history={createBrowserHistory()}>{routes}</Router>
    </Provider>,
    document.getElementById('content')
);
