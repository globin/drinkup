import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui';

import DrinkPersonStore from 'drink-person-table/drinkPersonStore';
import DrinkStore from 'drinks/drinkStore';

import pf from 'utils/priceFormat';

@connectToStores
class Payment extends React.Component {
    static propTypes = {
        drinks: React.PropTypes.array.isRequired,
        drinksPerPerson: React.PropTypes.object.isRequired,
    };

    static getStores() {
        return [DrinkPersonStore, DrinkStore];
    }

    static getPropsFromStores() {
        return {
            drinksPerPerson: DrinkPersonStore.getState().drinksPerPerson,
            drinks: DrinkStore.getState().drinks,
        };
    }

    getRowData(personName) {
        return this.props.drinks.map(({ name: drinkName, price }) => {
            const drinkCount = this.props.drinksPerPerson[personName][drinkName];

            return {
                price: drinkCount * price,
                count: drinkCount,
            };
        });
    }

    getPriceSum(name) {
        return this.getRowData(name).reduce((acc, { price }) => acc + price, 0);
    }

    getRows() {
        return Object.keys(this.props.drinksPerPerson).map((name) =>
            <TableRow key={name}>
                <TableRowColumn>{name}</TableRowColumn>
                {this.getRowData(name).map(({ price, count }) =>
                    <TableRowColumn>{pf(price)} ({count}x)</TableRowColumn>
                )}
                <TableRowColumn>{pf(this.getPriceSum(name))}</TableRowColumn>
            </TableRow>
        );
    }

    getDrinksSums() {
        return this.props.drinks.map(({ name: drinkName, price: drinkPrice }) =>
            Object.keys(this.props.drinksPerPerson).reduce(({ count, price }, personName) => ({
                count: count + this.props.drinksPerPerson[personName][drinkName],
                price: price + this.props.drinksPerPerson[personName][drinkName] * drinkPrice,
            }), { count: 0, price: 0 })
        );
    }

    render() {
        return (
            <Table fixedHeader displayRowCheckbox={false}>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        {this.props.drinks.map(({ name, priceString }) =>
                            <TableHeaderColumn key={name}>{name} ({priceString})</TableHeaderColumn>
                        )}
                        <TableHeaderColumn>Sum</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false} showRowHover stripedRows>
                    {this.getRows()}
                    <TableRow>
                        <TableRowColumn>Sum</TableRowColumn>
                        {this.getDrinksSums().map(({ count, priceString }) =>
                            <TableRowColumn>{priceString} ({count}x)</TableRowColumn>
                        )}
                        <TableRowColumn />
                    </TableRow>
                </TableBody>
            </Table>
        );
    }
}

export default Payment;
