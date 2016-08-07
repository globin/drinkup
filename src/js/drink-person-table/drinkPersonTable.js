import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui';
import { connect } from 'react-redux';
import DrinksPerPerson from './drinksPerPerson';

class DrinkPersonTable extends React.Component {
    static propTypes = {
        drinks: React.PropTypes.array.isRequired,
        people: React.PropTypes.array.isRequired,
    };

    constructor({ dispatch }) {
        super();
        this.dispatch = dispatch;
    }

    getRows() {
        return this.props.people.map(({ id, name }) =>
            <TableRow key={id}>
                <TableRowColumn>{name}</TableRowColumn>
                {this.props.drinks.map(({ id: drinkId }) =>
                    <TableRowColumn><DrinksPerPerson personId={id} drinkId={drinkId} /></TableRowColumn>)}
            </TableRow>
        );
    }

    render() {
        return (
            <Table fixedHeader displayRowCheckbox={false}>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        {this.props.drinks.map(({ id, name, priceString }) =>
                            <TableHeaderColumn key={id}>{name} ({priceString})</TableHeaderColumn>)}
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false} showRowHover stripedRows>
                    {this.getRows()}
                </TableBody>
            </Table>
        );
    }
}

const mapStateToProps = (state) => ({
    drinks: state.drinks,
    people: state.people,
});

export default connect(
    mapStateToProps
)(DrinkPersonTable);
