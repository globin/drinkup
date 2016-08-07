import priceFormat from 'utils/priceFormat';
import _ from 'lodash';

const initialState = {
    people: [],
    drinks: [],
    drinksPerPerson: [],
};

export default function DrinkApp(state = initialState, action) {
    switch (action.type) {
        case 'ADD_PEOPLE':
            const id = (_.maxBy(state.people, 'id') || { id: 0 }).id + 1;

            return Object.assign({}, state, {
                people: [
                    ...state.people,
                    {
                        id,
                        name: action.name,
                    },
                ],
                drinksPerPerson: [
                    ...state.drinksPerPerson,
                    ...state.drinks.map(({ id: drinkId }) => ({
                        drinkId,
                        personId: id,
                        num: 0,
                    })),
                ],
            });
        case 'ADD_DRINK':
            const drinkId = (_.maxBy(state.drinks, 'id') || { id: 0 }).id + 1;

            return Object.assign({}, state, {
                drinks: [
                    ...state.drinks,
                    {
                        id: drinkId,
                        name: action.name,
                        price: action.price,
                        priceString: priceFormat(action.price),
                    },
                ],
                drinksPerPerson: [
                    ...state.drinksPerPerson,
                    ...state.people.map(({ id: personId }) => ({
                        drinkId: id,
                        personId,
                        num: 0,
                    })),
                ],
            });
        case 'DRINK':
            return Object.assign({}, state, {
                drinksPerPerson: state.drinksPerPerson.map((data) => {
                    return data.personId === action.personId && data.drinkId === action.drinkId ?
                    { personId: data.personId, drinkId: data.drinkId, num: data.num + action.num } :
                        Object.assign({}, data);
                }),
            });
        default:
            return state;
    }
}
