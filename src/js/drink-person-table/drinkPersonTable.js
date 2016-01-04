import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import { IconButton, Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui';

import DrinkPersonActions from './drinkPersonActions';
import DrinkPersonStore from './drinkPersonStore';
import DrinkStore from 'drinks/drinkStore';

@connectToStores
class DrinkPersonTable extends React.Component {
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
        return this.props.drinks.map(({ name: drinkName }) => {
            return (
                <TableRowColumn key={drinkName}>
                    <IconButton iconClassName='material-icons' onClick={this.dec.bind(this, personName, drinkName)}>
                        remove
                    </IconButton>
                    {this.props.drinksPerPerson[personName][drinkName]}
                    <IconButton iconClassName='material-icons' onClick={this.inc.bind(this, personName, drinkName)}>
                        add
                    </IconButton>
                </TableRowColumn>
            );
        });
    }

    getRows() {
        return Object.keys(this.props.drinksPerPerson).map((name) => {
            return (
                <TableRow key={name}>
                    <TableRowColumn>{name}</TableRowColumn>
                    {this.getRowData(name)}
                </TableRow>
            );
        });
    }

    render() {
        return (
            <Table fixedHeader displayRowCheckbox={false}>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        {this.props.drinks.map(({ name, priceString }) =>
                            <TableHeaderColumn key={name}>{name} ({priceString})</TableHeaderColumn>)}
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false} showRowHover stripedRows>
                    {this.getRows()}
                </TableBody>
            </Table>
        );
    }

    inc = (personName, drinkName) => {
        DrinkPersonActions.inc({ personName, drinkName });
    };

    dec = (personName, drinkName) => {
        DrinkPersonActions.dec({ personName, drinkName });
    };
}

export default DrinkPersonTable;
