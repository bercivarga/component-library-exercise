import React, {useReducer} from "react";
import ReactDOM from 'react-dom';
import {PrimaryButton, SecondaryButton} from "./components/Buttons";

const initialState = {count: 0};

function reducer(state, action) {
    switch (action.type) {
        case 'INCREASE':
            return {count: state.count + 1};
        case 'DECREASE':
            return {count: state.count - 1};
        default:
            throw new Error();
    }
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div style={{gap: '16px'}}>
            <PrimaryButton onClick={() => dispatch({type: 'INCREASE'})}>Increase</PrimaryButton>
            <SecondaryButton onClick={() => dispatch({type: 'DECREASE'})}>Decrease</SecondaryButton>
            <h2>{state.count}</h2>
        </div>
    )
}


ReactDOM.render(<App/>, document.querySelector('#root'));
