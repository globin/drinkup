import React from 'react';
import { RaisedButton, TextField } from 'material-ui';

import PeopleActions from './peopleActions';

class AddPerson extends React.Component {
    render() {
        const styles = {
            button: {
                margin: 10,
            },
        };

        return (
            <form onSubmit={this.save}>
                <TextField floatingLabelText='Name' ref='name' />
                <RaisedButton style={styles.button} label='Save' type='submit' primary />
            </form>
        );
    }

    save = (evt) => {
        PeopleActions.add({ name: this.refs.name.getValue() });
        this.refs.name.setValue('');
        evt.preventDefault();
    }
}

export default AddPerson;
