import React from "react";
import { connect } from "react-redux";
import { postData } from "../../actions/actions";

const SmurfForm = props => {
  const onChange = e => {
    // { [e.target.name]: e.target.value };
  };

  const onSubmit = e => {
    // e.preventDefault();

    const post = {};

    postData(post);
  };

  return (
    <div>
      <h1>Add Post</h1>
      <form onSubmit={onSubmit()}>
        <div>
          <label>Name </label>
          <br />
          <input
            type='text'
            name='name'
            onChange={onChange()}
            value={props.name}
          />
          <br />
          <label>Age </label>
          <br />
          <input
            type='text'
            name='age'
            onChange={onChange()}
            value={props.age}
          />
          <br />
          <label>Height </label>
          <br />
          <input
            type='text'
            name='height'
            onChange={onChange()}
            value={props.height}
          />
        </div>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default connect(null, { postData })(SmurfForm);
