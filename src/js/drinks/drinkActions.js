import flux from 'control';
import { createActions } from 'alt/utils/decorators';

import DrinkSource from './drinkSource';

@createActions(flux)
class DrinkActions {
    constructor() {
        this.generateActions('add', 'update');
    }

    fetch() {
        this.dispatch();

        DrinkSource.fetch().then((drinks) => {
            this.actions.update(drinks);
        });
    }
}

export default DrinkActions;
