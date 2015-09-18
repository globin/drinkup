import flux from 'control';
import { createActions } from 'alt/utils/decorators';

@createActions(flux)
class PeopleActions {
    constructor() {
        this.generateActions('add');
    }
}

export default PeopleActions;
