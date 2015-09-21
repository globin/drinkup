import flux from 'control';
import { createStore, bind } from 'alt/utils/decorators';

import DrinkPersonActions from './drinkPersonActions';
import DrinkActions from 'drinks/drinkActions';
import PeopleActions from 'people/peopleActions';
import DrinkStore from 'drinks/drinkStore';
import PeopleStore from 'people/peopleStore';

@createStore(flux)
class DrinkPersonStore {
    drinksPerPerson = {};

    fillDrinks(drinksCount, { name: drinkName }) {
        drinksCount[drinkName] = drinksCount[drinkName] || 0;

        return drinksCount;
    }

    @bind(DrinkActions.add, DrinkActions.update, PeopleActions.add, PeopleActions.update)
    updateUpstream() {
        this.waitFor(DrinkStore, PeopleStore);

        this.drinksPerPerson = PeopleStore.getState().people.reduce((drinksPerPerson, { name: personName }) => {
            drinksPerPerson[personName] = DrinkStore.getState().drinks.reduce(
                this.fillDrinks,
                drinksPerPerson[personName] || {}
            );

            return drinksPerPerson;
        }, this.drinksPerPerson);
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
