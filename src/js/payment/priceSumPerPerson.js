import React from 'react';
import { connect } from 'react-redux';
import priceFormat from 'utils/priceFormat';

class DrinksPerPersonWithPrice extends React.Component {
    static propTypes = {
        drinksCounts: React.PropTypes.array.isRequired,
        personId: React.PropTypes.number.isRequired,
        drinks: React.PropTypes.array.isRequired,
    };

    render() {
        const numDrinks = this.props.drinksCounts.reduce((acc, { num }) => acc + num, 0);
        const price = this.props.drinksCounts.reduce((acc, { drinkId, num }) =>
            acc + num * this.props.drinks.find(({ id }) => id === drinkId).price
            , 0);

        return (
            <div>
                {numDrinks} ({priceFormat(price)})
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    drinksCounts: state.drinksPerPerson.filter(({ personId }) => personId === ownProps.personId),
    drinks: state.drinks,
});

export default connect(
    mapStateToProps
)(DrinksPerPersonWithPrice);

