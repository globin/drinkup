import React from 'react';
import { connect } from 'react-redux';
import { RaisedButton, TextField } from 'material-ui';

import { addPeople } from './peopleActions';

const AddPerson = ({ dispatch }) => {
    let input;
    const styles = {
        button: {
            margin: 10,
        },
    };
    const save = (e) => {
        e.preventDefault();
        if (!input.value.trim()) {
            return;
        }
        dispatch(addPeople(input.value));
        input.value = '';
    };

    return (
        <form onSubmit={save}>
            <TextField onChange={(e) => {
                input = e.target;
            }} floatingLabelText='Name'
            />
            <RaisedButton style={styles.button} label='Save' type='submit' primary />
        </form>
   );
};

export default connect()(AddPerson);
