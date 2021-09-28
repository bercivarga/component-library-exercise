import React, {useReducer, useState} from "react";
import ReactDOM from 'react-dom';
import {PrimaryButton, SecondaryButton, TertiaryButton} from "./components";
import {GlobalStyle, darkTheme, defaultTheme} from "./utils";
import {ThemeProvider} from "styled-components";
import {SignUpModal} from "./components";

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
    const [useDarkTheme, setUseDarkTheme] = useState(false);

    return (
        <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
            <div style={{
                backgroundColor: useDarkTheme ? defaultTheme.primaryColor : darkTheme.primaryColor,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100%'
            }}>
                <TertiaryButton onClick={() => setUseDarkTheme(!useDarkTheme)}>Change theme</TertiaryButton>
                <PrimaryButton onClick={() => dispatch({type: 'INCREASE'})}>Increase</PrimaryButton>
                <SecondaryButton onClick={() => dispatch({type: 'DECREASE'})}>Decrease</SecondaryButton>
                <TertiaryButton onClick={() => dispatch({type: 'RESET'})}>Reset</TertiaryButton>
                <h2 style={{color: useDarkTheme ? darkTheme.primaryColor : defaultTheme.primaryColor}}>{state.count}</h2>
            </div>
            <SignUpModal />
            <GlobalStyle/>
        </ThemeProvider>
    )
}


ReactDOM.render(<App/>, document.querySelector('#root'));
