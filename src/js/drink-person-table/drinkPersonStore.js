import flux from 'control';
import { createStore, bind } from 'alt/utils/decorators';

import DrinkPersonActions from './drinkPersonActions';
//import DrinkActions from 'drinks/drinkActions';
//import DrinkStore from 'drinks/drinkStore';

@createStore(flux)
class DrinkPersonStore {
    drinksPerPerson = {};

    fillDrinks(drinksCount, { name: drinkName }) {
        drinksCount[drinkName] = drinksCount[drinkName] || 0;

        return drinksCount;
    }

    //@bind(DrinkActions.add, DrinkActions.update)
    updateUpstream() {
        //this.waitFor(DrinkStore);

        //this.drinksPerPerson = PeopleStore.getState().people.reduce((drinksPerPerson, { name: personName }) => {
        //    drinksPerPerson[personName] = DrinkStore.getState().drinks.reduce(
        //        this.fillDrinks,
        //        drinksPerPerson[personName] || {}
        //    );
        //
        //    return drinksPerPerson;
        //}, this.drinksPerPerson);
    }

    @bind(DrinkPersonActions.dec)
    dec({ personName, drinkName }) {
        this.drinksPerPerson[personName][drinkName] -= 1;
    }

    @bind(DrinkPersonActions.inc)
    inc({ personName, drinkName }) {
        this.drinksPerPerson[personName][drinkName] += 1;
    }
}

export default DrinkPersonStore;
