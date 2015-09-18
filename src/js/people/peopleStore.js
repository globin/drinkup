import flux from 'control';
import { createStore, bind } from 'alt/utils/decorators';
import actions from './peopleActions';

@createStore(flux)
class PeopleStore {
    people = [
        {
            name: 'Jack',
        },
        {
            name: 'John',
        },
        {
            name: 'Peter',
        },
        {
            name: 'George',
        },
    ];

    @bind(actions.add)
    add(name) {
        this.people.push({ name });
    }
}

export default PeopleStore;
