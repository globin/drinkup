import React from 'react';

import AddPerson from './addPerson';
import PeopleList from './peopleList';

class People extends React.Component {
    render() {
        return (
            <div>
                <PeopleList />
                <AddPerson />
            </div>
        );
    }
}

export default People;
