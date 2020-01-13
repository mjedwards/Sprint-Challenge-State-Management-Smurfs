import axios from "axios";

export const GET_DATA = "GET_DATA";
export const POST_DATA = "POST_DATA";

export const getData = () => {
  return dispatch => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        dispatch({ type: GET_DATA, payload: res.data });
      })
      .catch(err => console.log("ERROR:", err));
  };
};

export const postData = post => {
  const dispatch = () => {
    axios
      .post("http://localhost:3333/smurfs", post)
      .then(res => {
        console.log(res.data);
        dispatch({ type: POST_DATA, payload: res.data });
      })
      .catch(err => console.log("ERROR:", err));
  };
  return dispatch();
};
