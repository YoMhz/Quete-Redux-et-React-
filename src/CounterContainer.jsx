import React from 'react';
import { connect } from "react-redux"

const CounterComponent = ({count, dispatch}) => {
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => dispatch({type : 'INCREMENT'})}>Increment</button>
            <button onClick={() => dispatch({type : 'DECREMENT'})}>Decrement</button>
            <button onClick={() => dispatch({type : 'ADDTEN'})}>Add 10</button>
            <button onClick={() => dispatch({type : 'REMOVETEN'})}>Remove 10</button>
            <button onClick={() => dispatch({type : 'RESET'})}>Reset</button>
        </div>
    )};

function counterNumber(state) {
    return ({
         count: state
    });
}

export default connect(counterNumber)(CounterComponent);