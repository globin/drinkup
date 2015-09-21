import React from 'react';
import { RaisedButton, TextField } from 'material-ui';

import DrinkActions from './drinkActions';

class AddDrink extends React.Component {
    render() {
        const styles = {
            button: {
                margin: 10,
            },
        };

        return (
            <form onSubmit={this.save}>
                <TextField floatingLabelText='Name' ref='name' />
                <TextField floatingLabelText='Price' ref='price' />
                <RaisedButton style={styles.button} label='Save' type='submit' primary />
            </form>
        );
    }

    save = (evt) => {
        DrinkActions.add({
            name: this.refs.name.getValue(),
            price: this.refs.price.getValue(),
        });
        this.refs.name.setValue('');
        this.refs.price.setValue('');
        evt.preventDefault();
    }
}

export default AddDrink;
