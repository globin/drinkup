import flux from 'control';
import { createStore, bind } from 'alt/utils/decorators';
import actions from './drinkActions';

@createStore(flux)
class DrinkStore {
    drinks = [
        {
            name: 'Spezi',
        },
        {
            name: 'Radler',
        },
        {
            name: 'Pali',
        },
        {
            name: 'Tegernseer',
        },
        {
            name: 'Augustiner',
        },
    ];

    @bind(actions.add)
    add(name) {
        this.drinks.push({ name });
    }
}

export default DrinkStore;
