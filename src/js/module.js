import React from 'react';
import Router from 'react-router';
import routes from 'routes';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

Router.run(routes, Router.HistoryLocation, (Root, state) => {
    React.render(<Root {...state}/>, document.getElementById('content'));
});
