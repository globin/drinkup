import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import { List, ListItem } from 'material-ui';

import PeopleStore from './peopleStore';

@connectToStores
class AddPerson extends React.Component {
    propTypes = {
        people: React.PropTypes.array.isRequired,
    };

    static getStores() {
        return [PeopleStore];
    }

    static getPropsFromStores() {
        return PeopleStore.getState();
    }

    render() {
        const listItems = this.props.people.map((person) => <ListItem primaryText={person.name} />);

        return (
            <List>
                {listItems}
            </List>
        );
    }
}

export default AddPerson;
