import makeActionCreator from 'utils/makeActionCreator';

const DRINK = 'DRINK';

export const drink = makeActionCreator(DRINK, 'personId', 'drinkId', 'num');
