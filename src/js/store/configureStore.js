import { applyMiddleware, compose, createStore } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from 'reducer';
import { addPeople } from 'people/peopleActions';
import { addDrink } from 'drinks/drinkActions';
import { drink } from 'drink-person-table/drinkPersonActions';

export default function configureStore(initialState) {
    const logger = createLogger();
    const store = createStore(rootReducer, initialState, compose(
        applyMiddleware(logger),
        window.devToolsExtension ? window.devToolsExtension() : undefined
    ));

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducer', () => {
            const nextReducer = require('../reducer'); // eslint-disable-line global-require

            store.replaceReducer(nextReducer);
        });
    }

    store.dispatch(addDrink('Augustiner', 0.8));
    store.dispatch(addDrink('Tegernseer', 0.9));
    store.dispatch(addDrink('Spezi', 0.5));
    store.dispatch(addDrink('Kaffee', 0.5));
    store.dispatch(addDrink('Mate', 0.6));

    store.dispatch(addPeople('Paula'));
    store.dispatch(addPeople('Kata'));
    store.dispatch(addPeople('Babsi'));
    store.dispatch(addPeople('Marci'));
    store.dispatch(addPeople('Lisa'));
    store.dispatch(addPeople('Kathi'));
    store.dispatch(addPeople('Lukas'));
    store.dispatch(addPeople('Mira'));
    store.dispatch(addPeople('Senem'));
    store.dispatch(addPeople('Marina'));
    store.dispatch(addPeople('Phil'));
    store.dispatch(addPeople('Julian'));
    store.dispatch(addPeople('Max'));
    store.dispatch(addPeople('Paul'));
    store.dispatch(addPeople('Domi'));
    store.dispatch(addPeople('Robin'));
    store.dispatch(addPeople('Fafa'));
    store.dispatch(addPeople('Rolle'));
    store.dispatch(addPeople('Jan'));
    store.dispatch(addPeople('Manu'));

    store.dispatch(drink(1, 1, 5));

    return store;
}
