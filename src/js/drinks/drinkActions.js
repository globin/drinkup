import flux from 'control';
import { createActions } from 'alt/utils/decorators';

@createActions(flux)
class DrinkActions {
    constructor() {
        this.generateActions('add');
    }
}

export default DrinkActions;
