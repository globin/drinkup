import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import { List, ListItem } from 'material-ui';

import DrinkStore from './drinkStore';

@connectToStores
class AddDrink extends React.Component {
    propTypes = {
        drinks: React.PropTypes.array.isRequired,
    };

    static getStores() {
        return [DrinkStore];
    }

    static getPropsFromStores() {
        return DrinkStore.getState();
    }

    render() {
        const listItems = this.props.drinks.map((drink) => <ListItem primaryText={drink.name} />);

        return (
            <List>
                {listItems}
            </List>
        );
    }
}

export default AddDrink;
