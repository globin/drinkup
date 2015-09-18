import React from 'react';
import { RouteHandler, Link } from 'react-router';
import ThemeManager from 'material-ui/lib/styles/theme-manager';


class Main extends React.Component {

    static childContextTypes = {
        muiTheme: React.PropTypes.object,
    };

    getChildContext() {
        return {
            muiTheme: new ThemeManager().getCurrentTheme(),
        };
    }

    render() {
        return (
            <div>
                <h1>Drink Up</h1>
                <Link to='people'>People</Link> <Link to='drinks'>Drinks</Link>
                <RouteHandler/>
            </div>
        );
    }
}

export default Main;
