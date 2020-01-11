import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions/actions";

const Smurfs = props => {
  return (
    <div>
      <h1>Posts</h1>
      <button
        onClick={() => {
          props.getData();
        }}
      >
        View Smurfs
      </button>
      {props.smurf.map(smurf => {
        return (
          <div key={smurf.id}>
            <h4>{smurf.name}</h4>
            <h4>{smurf.age}</h4>
            <h4>{smurf.height}</h4>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return { name: state.name, age: state.age, height: state.height };
};

export default connect(mapStateToProps, { getData })(Smurfs);
