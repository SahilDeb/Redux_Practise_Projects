export const ADD_CHARACTER = "add_character";

export function addCharacterById(id) {
  const action = {
    type: ADD_CHARACTER,
    id
  }
  return action;
}