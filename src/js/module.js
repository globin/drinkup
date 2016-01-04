import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import routes from 'routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import createBrowserHistory from 'history/lib/createBrowserHistory';

injectTapEventPlugin();

render(
    <Router history={createBrowserHistory()}>{routes}</Router>,
    document.getElementById('content')
);
