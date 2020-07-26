import {
  ADD_HEROES,
  REMOVE_HEROES
} from '../actions';

import createCharacter from './helpers';



function heroes(state = [], action) {
  switch(action.type) {
    case ADD_HEROES:
      let heroes = [...state, createCharacter(action.id)];
      return heroes;
    case REMOVE_HEROES:
      let characters = state.filter(item => item.id !== action.id);
      return characters;
    default:
      return state;
  }
}

export default heroes;