import flux from 'control';
import { createActions } from 'alt/utils/decorators';

import PeopleSource from './peopleSource';

@createActions(flux)
class PeopleActions {
    constructor() {
        this.generateActions('add', 'update');
    }

    fetch() {
        this.dispatch();

        PeopleSource.fetch().then((people) => {
            this.actions.update(people);
        });
    }
}

export default PeopleActions;
