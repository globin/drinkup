import React from 'react';
import { connect } from 'react-redux';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui';

import DrinksPerPersonWithPrice from './drinksPerPersonWithPrice';
import PriceSumPerPerson from './priceSumPerPerson';

class Payment extends React.Component {
    static propTypes = {
        drinks: React.PropTypes.array.isRequired,
        people: React.PropTypes.array.isRequired,
    };

    getRows() {
        return this.props.people.map((person) =>
            <TableRow key={person.id}>
                <TableRowColumn>{person.name}</TableRowColumn>
                {this.props.drinks.map((drink) =>
                    <TableRowColumn><DrinksPerPersonWithPrice drink={drink} personId={person.id}/></TableRowColumn>
                )}
                <TableRowColumn><PriceSumPerPerson personId={person.id}/></TableRowColumn>
            </TableRow>
        );
    }

    //getDrinksSums() {
    //    return this.props.drinks.map(({ name: drinkName, price: drinkPrice }) =>
    //        Object.keys(this.props.drinksPerPerson).reduce(({ count, price }, personName) => ({
    //            count: count + this.props.drinksPerPerson[personName][drinkName],
    //            price: price + this.props.drinksPerPerson[personName][drinkName] * drinkPrice,
    //        }), { count: 0, price: 0 })
    //    );
    //}

    render() {
        return (
            <Table fixedHeader displayRowCheckbox={false}>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        {this.props.drinks.map(({ id, name, priceString }) =>
                            <TableHeaderColumn key={id}>{name} ({priceString})</TableHeaderColumn>
                        )}
                        <TableHeaderColumn>Sum</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false} showRowHover stripedRows>
                    {this.getRows()}
                    {/*
                    <TableRow>
                        <TableRowColumn>Sum</TableRowColumn>
                        {this.getDrinksSums().map(({ count, priceString }) =>
                            <TableRowColumn>{priceString} ({count}x)</TableRowColumn>
                        )}
                        <TableRowColumn />
                    </TableRow>*/}
                </TableBody>
            </Table>
        );
    }
}

const mapStateToProps = ({ drinks, people }) => ({
    drinks,
    people,
});

export default connect(
    mapStateToProps
)(Payment);
