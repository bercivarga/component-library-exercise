import React from "react";
import ReactDOM from 'react-dom';
import {PrimaryButton, SecondaryButton} from "./components/Buttons";

const App = () => (
    <div style={{gap: '16px'}}>
        <PrimaryButton>Primary</PrimaryButton>
        <SecondaryButton>Secondary</SecondaryButton>
    </div>
)

ReactDOM.render(<App/>, document.querySelector('#root'));
