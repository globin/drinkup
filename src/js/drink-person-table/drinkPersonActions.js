import flux from 'control';
import { createActions } from 'alt/utils/decorators';

@createActions(flux)
class DrinkActions {
    constructor() {
        this.generateActions('inc', 'dec');
    }
}

export default DrinkActions;
