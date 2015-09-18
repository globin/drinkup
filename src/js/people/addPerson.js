import React from 'react';
import { FlatButton, TextField } from 'material-ui';

import PeopleActions from './peopleActions';

class AddPerson extends React.Component {
    render() {
        return (
            <form onSubmit={this.save}>
                <FlatButton label='Save' />
                <TextField floatingLabelText='Name' ref='name' />
            </form>
        );
    }

    save = (evt) => {
        PeopleActions.add(this.refs.name.getValue());
        this.refs.name.setValue('');
        evt.preventDefault();
    }
}

export default AddPerson;
