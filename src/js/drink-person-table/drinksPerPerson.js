import React from 'react';
import { IconButton } from 'material-ui';
import { drink } from './drinkPersonActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class DrinksPerPerson extends React.Component {
    static propTypes = {
        numDrinks: React.PropTypes.number.isRequired,
        drinkId: React.PropTypes.number.isRequired,
        personId: React.PropTypes.number.isRequired,
        drink: React.PropTypes.func.isRequired,
    };

    render() {
        const drinkId = this.props.drinkId;
        const personId = this.props.personId;

        return (
            <div>
                <IconButton iconClassId='material-icons' onClick={this.props.drink.bind(this, personId, drinkId, -1)}>
                    remove
                </IconButton>
                {this.props.numDrinks}
                <IconButton iconClassId='material-icons' onClick={this.props.drink.bind(this, personId, drinkId, 1)}>
                    add
                </IconButton>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    numDrinks: state.drinksPerPerson.find(
        ({ personId, drinkId }) => ownProps.personId === personId && ownProps.drinkId === drinkId
    ).num,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ drink }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DrinksPerPerson);

