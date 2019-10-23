import React from 'react';
import CounterContainer from './container/CounterContainer';
import logo from './logo.svg';
import './App.css';
import TodosContainer from "./container/TodosContainer";

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
