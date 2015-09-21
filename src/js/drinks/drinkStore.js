import flux from 'control';
import { createStore, bind } from 'alt/utils/decorators';
import actions from './drinkActions';

@createStore(flux)
class DrinkStore {
    drinks = [];

    @bind(actions.add)
    add(drink) {
        this.drinks.push(drink);
    }

    @bind(actions.update)
    update(drinks) {
        this.drinks = drinks;
    }
}

export default DrinkStore;
