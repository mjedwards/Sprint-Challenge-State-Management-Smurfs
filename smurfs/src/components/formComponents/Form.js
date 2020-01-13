import React, { useState } from "react";
import { connect } from "react-redux";
import { postData } from "../../actions/actions";
import { initialState } from "../../reducers/reducers";

const SmurfForm = props => {
  const [postInput, setPostInput] = useState(initialState.smurf);
  const onchange = e => {
    setPostInput({ ...postInput, [e.target.name]: e.target.value });
  };

  const onsubmit = e => {
    e.preventDefault();
    postData({ ...postInput });
  };
  // console.log(postInput);
  return (
    <div>
      <h1>Add Post</h1>
      <form onSubmit={onsubmit}>
        <div>
          <label>Name </label>
          <br />
          <input
            type='text'
            name='name'
            onChange={onchange}
            value={postInput.name}
          />
          <br />
          <label>Age </label>
          <br />
          <input
            type='text'
            name='age'
            onChange={onchange}
            value={postInput.age}
          />
          <br />
          <label>Height </label>
          <br />
          <input
            type='text'
            name='height'
            onChange={onchange}
            value={postInput.height}
          />
        </div>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

// const mapStateToProps = state => {
//   return { smurf: state.smurf };
// };

export default connect(null, { postData })(SmurfForm);
