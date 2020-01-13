import { GET_DATA, POST_DATA } from "../actions/actions";

export const initialState = {
  smurf: []
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      //   console.log({ ...state }, "reducer");
      //   console.log(action.payload, "reducer");
      return { ...state, smurf: action.payload };
    case POST_DATA:
      console.log({ ...state }, "reducer post");
      console.log(action.payload, "reducer post");
      return { ...state, smurf: action.payload };
    default:
      return state;
  }
};
