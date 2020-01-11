import { GET_DATA, POST_DATA } from "../actions/actions";

const initialState = {
  smurf: [{ name: "Brainey", age: 200, height: "5cm", id: 0 }]
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return { ...state };
    case POST_DATA:
      return { ...state };
    default:
      return state;
  }
};
