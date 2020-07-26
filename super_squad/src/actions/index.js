export const ADD_HEROES = "add_character";
export const REMOVE_HEROES = "add_heroes";

export const addHeroesById = id => {
  return {
    type: ADD_HEROES,
    id
  };
};

export const removeHeroesById = id => {
  return {
    type: REMOVE_HEROES,
    id
  };
};