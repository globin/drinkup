import makeActionCreator from 'utils/makeActionCreator';

const ADD_DRINK = 'ADD_DRINK';

export const addDrink = makeActionCreator(ADD_DRINK, 'name', 'price');
