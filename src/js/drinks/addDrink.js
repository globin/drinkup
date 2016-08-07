import React from 'react';
import { connect } from 'react-redux';
import { RaisedButton, TextField } from 'material-ui';

import { addDrink } from './drinkActions';

const AddDrink = ({ dispatch }) => {
    const inputs = {};
    const styles = {
        button: {
            margin: 10,
        },
    };
    const save = (e) => {
        e.preventDefault();
        if (!inputs.name.value.trim() || !inputs.price.value.trim()) {
            return;
        }
        dispatch(addDrink(inputs.name.value, inputs.price.value));
        inputs.name.value = '';
        inputs.price.value = '';
    };
    const onChange = (field) => (e) => {
        inputs[field] = e.target;
    };

    return (
        <form onSubmit={save}>
            <TextField onChange={onChange('name')} floatingLabelText='Name' />
            <TextField onChange={onChange('price')} floatingLabelText='Price' />
            <RaisedButton style={styles.button} label='Save' type='submit' primary />
        </form>
    );
};

export default connect()(AddDrink);
