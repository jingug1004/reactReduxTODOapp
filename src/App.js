import React from 'react';
import CounterContainer from './containers/CounterContainer';
import logo from './logo.svg';
import './App.css';
import TodosContainer from "./containers/TodosContainer";

const App = () => {
    return (
        <div>
            <CounterContainer/>
            <hr/>
            <TodosContainer/>
        </div>
    );
};

export default App;
