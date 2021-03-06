
const initialState = {
  persons: []
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case "ADD_PERSON":
      const newPerson = {
        id: Math.random(),
        name: action.name,
        age: action.age
      }
      return {
        ...state,
        persons: state.persons.concat(newPerson)
      }
    case "REMOVE_PERSON":
      return {
        ...state,
        persons: state.persons.filter(person => person.id !== action.personId)
      }
    default:
      return state;
  }
  // return state;

};




export default reducer;