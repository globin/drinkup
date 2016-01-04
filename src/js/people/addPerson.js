import React from 'react';
import { RaisedButton, TextField } from 'material-ui';

import ValueLink from '../utils/valueLink';
import PeopleActions from './peopleActions';

@ValueLink
class AddPerson extends React.Component {
    state = {
        name: '',
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
                <RaisedButton style={styles.button} label='Save' type='submit' primary />
            </form>
        );
    }

    save = (evt) => {
        PeopleActions.add({ name: this.state.name });
        this.setState({ name: '' }); // eslint-disable-line react/no-set-state
        evt.preventDefault();
    }
}

export default AddPerson;
