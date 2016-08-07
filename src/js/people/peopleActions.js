import makeActionCreator from 'utils/makeActionCreator';

const ADD_PEOPLE = 'ADD_PEOPLE';

export const addPeople = makeActionCreator(ADD_PEOPLE, 'name');
