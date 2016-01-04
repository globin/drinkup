import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import { List, ListItem } from 'material-ui';

import PeopleStore from './peopleStore';

@connectToStores
class PeopleList extends React.Component {
    static propTypes = {
        people: React.PropTypes.array.isRequired,
    };

    static getStores() {
        return [PeopleStore];
    }

    static getPropsFromStores() {
        return PeopleStore.getState();
    }

    render() {
        const listItems = this.props.people.map(({ name }) => <ListItem disabled primaryText={name} key={name}/>);

        return (
            <List>
                {listItems}
            </List>
        );
    }
}

export default PeopleList;
