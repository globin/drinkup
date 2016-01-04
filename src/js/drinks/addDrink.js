import React from 'react';
import { RaisedButton, TextField } from 'material-ui';

import ValueLink from '../utils/valueLink';
import Drink from './drink';
import DrinkActions from './drinkActions';

@ValueLink
class AddDrink extends React.Component {
    state = {
        name: '',
        price: '',
    };

    render() {
        const styles = {
            button: {
                margin: 10,
            },
        };

        return (
            <form onSubmit={this.save}>
                <TextField floatingLabelText='Name' valueLink={this.valueLink('name')} />
                <TextField floatingLabelText='Price' valueLink={this.valueLink('price')} />
                <RaisedButton style={styles.button} label='Save' type='submit' primary />
            </form>
        );
    }

    save = (evt) => {
        DrinkActions.add(new Drink(this.state.name, this.state.price));
        this.setState({ // eslint-disable-line react/no-set-state
            name: '',
            price: '',
        });
        evt.preventDefault();
    }
}

export default AddDrink;
