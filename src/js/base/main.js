import React from 'react';
import { AppCanvas, Paper, Styles, Tab, Tabs } from 'material-ui';

import DrinkActions from 'drinks/drinkActions';
import PeopleActions from 'people/peopleActions';

const { Colors } = Styles;


class Main extends React.Component {
    static propTypes = {
        history: React.PropTypes.object,
        children: React.PropTypes.element,
    };

    state = {
        tabIndex: this.tabIndex,
    };

    componentWillReceiveProps() {
        this.setState({ tabIndex: this.tabIndex }); // eslint-disable-line react/no-set-state
    }

    render() {
        const styles = {
            container: {
                marginTop: 64,
            },
            tabRoot: {
                position: 'fixed',
                height: 64,
                top: 0,
                right: 0,
                zIndex: 4,
                width: '100%',
                backgroundColor: Colors.cyan500,
            },
            tabContainer: {
                position: 'absolute',
                bottom: 0,
                right: 0,
            },
            tabs: {
                bottom: 0,
            },
            tab: {
                height: 64,
                width: 400,
            },
        };

        return (
            <AppCanvas>
                <Paper
                    zDepth={0}
                    rounded={false}
                    style={styles.tabRoot}
                >
                    <div style={styles.tabContainer}>
                        <Tabs
                            style={styles.tabs}
                            value={this.state.tabIndex}
                            onChange={this.handleTabChange}
                        >
                            <Tab
                                style={styles.tab}
                                value='1'
                                label='Drinks'
                                route='drinks'
                            />
                            <Tab
                                style={styles.tab}
                                value='2'
                                label='People'
                                route='people'
                            />
                            <Tab
                                style={styles.tab}
                                value='3'
                                label='List'
                                route='drink-person-table'
                            />
                            <Tab
                                style={styles.tab}
                                value='4'
                                label='Payment'
                                route='payment'
                            />
                        </Tabs>
                    </div>
                </Paper>

                <div style={styles.container}>
                    {this.props.children}
                </div>
            </AppCanvas>
        );
    }

    get tabIndex() {
        if (this.props.history.isActive('drinks')) {
            return '1';
        }
        if (this.props.history.isActive('people')) {
            return '2';
        }
        if (this.props.history.isActive('drink-person-table')) {
            return '3';
        }
        if (this.props.history.isActive('payment')) {
            return '4';
        }

        return '0';
    }

    handleTabChange = (value, e, tab) => {
        this.props.history.pushState(null, tab.props.route);
        this.setState({ tabIndex: this.tabIndex });
    };

    componentWillMount() {
        PeopleActions.fetch();
        DrinkActions.fetch();
    }
}

export default Main;
