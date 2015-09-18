import React from 'react';
import { FlatButton, TextField } from 'material-ui';

import DrinkActions from './drinkActions';

class AddDrink extends React.Component {
    render() {
        return (
            <form onSubmit={this.save}>
                <FlatButton label='Save' />
                <TextField floatingLabelText='Name' ref='name' />
            </form>
        );
    }

    save = (evt) => {
        DrinkActions.add(this.refs.name.getValue());
        this.refs.name.setValue('');
        evt.preventDefault();
    }
}

export default AddDrink;
