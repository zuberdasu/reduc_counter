import React, { Component } from "react";
import { connect } from "react-redux";

import { INCREMENT, DECREMENT, RESET } from "./redux/types";

class App extends Component {
  render() {
    const { dispatch } = this.props;
    return (
      <>
        <h1>Redux Counter</h1>
        <p>The count is: {this.props.count}</p>
        <button
          onClick={() => {
            dispatch({ type: INCREMENT });
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            dispatch({ type: DECREMENT });
          }}
        >
          Remove
        </button>
        <button
          onClick={() => {
            dispatch({ type: RESET });
          }}
        >
          Reset
        </button>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

export default connect(mapStateToProps)(App);
