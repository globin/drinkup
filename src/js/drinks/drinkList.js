import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import { List, ListItem } from 'material-ui';

import DrinkStore from './drinkStore';

@connectToStores
class DrinkList extends React.Component {
    static propTypes = {
        drinks: React.PropTypes.array.isRequired,
    };

    static getStores() {
        return [DrinkStore];
    }

    static getPropsFromStores() {
        return DrinkStore.getState();
    }

    render() {
        const listItems = this.props.drinks.map((drink) => {
            return (<ListItem disabled primaryText={`${drink.name} (${drink.priceString})`} key={drink.name} />);
        });

        return (
            <List>
                {listItems}
            </List>
        );
    }
}

export default DrinkList;
