import React from 'react';

import AddDrink from './addDrink';
import DrinkList from './drinkList';

class Drinks extends React.Component {
    render() {
        return (
            <div>
                <DrinkList />
                <AddDrink />
            </div>
        );
    }
}

export default Drinks;
