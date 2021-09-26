import React, {useReducer} from "react";
import ReactDOM from 'react-dom';
import {PrimaryButton, SecondaryButton, TertiaryButton} from "./components/Buttons";
import {GlobalStyle} from "./utils";

const initialState = {count: 0};

function reducer(state, action) {
    switch (action.type) {
        case 'INCREASE':
            return {count: state.count + 1};
        case 'DECREASE':
            return {count: state.count - 1};
        case 'RESET':
            return {count: 0}
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
            <TertiaryButton onClick={() => dispatch({type: 'RESET'})}>Reset</TertiaryButton>
            <h2>{state.count}</h2>
            <GlobalStyle/>
        </div>
    )
}


ReactDOM.render(<App/>, document.querySelector('#root'));
