import flux from 'control';
import { createStore, bind } from 'alt/utils/decorators';
import actions from './peopleActions';

@createStore(flux)
class PeopleStore {
    people = [];

    @bind(actions.add)
    add(person) {
        this.people.push(person);
    }

    @bind(actions.update)
    update(people) {
        this.people = people;
    }
}

export default PeopleStore;
