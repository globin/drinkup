import React from 'react';
import { connect } from 'react-redux';
import priceFormat from 'utils/priceFormat';

class DrinksPerPersonWithPrice extends React.Component {
    static propTypes = {
        numDrinks: React.PropTypes.number.isRequired,
        personId: React.PropTypes.number.isRequired,
        drink: React.PropTypes.object.isRequired,
    };

    render() {
        return (
            <div>{this.props.numDrinks} ({priceFormat(this.props.drink.price * this.props.numDrinks)})</div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    numDrinks: state.drinksPerPerson.find(
        ({ personId, drinkId }) => ownProps.personId === personId && ownProps.drink.id === drinkId
    ).num,
});

export default connect(
    mapStateToProps
)(DrinksPerPersonWithPrice);

