import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui';

class PeopleList extends React.Component {
    static propTypes = {
        people: React.PropTypes.array.isRequired,
    };

    render() {
        const listItems = this.props.people.map(({ name }) => <ListItem disabled primaryText={name} key={name}/>);

        return (
            <List>
                {listItems}
            </List>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        people: state.people,
    };
};

const WrappedPeopleList = connect(
    mapStateToProps
)(PeopleList);


export default WrappedPeopleList;
