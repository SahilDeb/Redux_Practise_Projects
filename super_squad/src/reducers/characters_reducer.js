import characters_json from '../data/characters.json';
import createCharacter from './helpers';

import {
  ADD_HEROES,
  REMOVE_HEROES
} from '../actions';

function characters(state = characters_json, action) {
  switch(action.type) {
    case ADD_HEROES:
      let characters = state.filter(item => item.id !== action.id);
      return characters;
    case REMOVE_HEROES:
      let heroes = [...state, createCharacter(action.id)];
      return heroes;
    default:
      return state;
  }
}

export default characters;