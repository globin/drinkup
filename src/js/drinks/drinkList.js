import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui';

class DrinkList extends React.Component {
    static propTypes = {
        drinks: React.PropTypes.array.isRequired,
    };

    render() {
        const listItems = this.props.drinks.map((drink) => {
            return (<ListItem disabled primaryText={`${drink.name} (${drink.priceString})`} key={drink.name} />);
        });

        return (
            <List>
                {listItems}
            </List>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        drinks: state.drinks,
    };
};

const WrappedDrinkList = connect(
    mapStateToProps
)(DrinkList);

export default WrappedDrinkList;
