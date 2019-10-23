import React from 'react';
import {connect} from 'react-redux';
import Todos from '../components/Todos';
import {changeInput, insert, toggle, remove} from "../modules/todos";

const TodosContainer = ({input, todos, changeInput, insert, toggle, remove}) => {
    return (
        <Todos
            input={input}
            todos={todos}
            onChangeInput={changeInput}
            onInsert={insert}
            onToggle={toggle}
            onRemove={remove}
        />
    );
};

/*const mapStateToProps = state => (
    {
        number: state.counter.number
    }
);

const mapDispatchToProps = dispatch => (
    {
        increase: () => {
            dispatch(increase());
        },
        decrease: () => {
            dispatch(decrease());
        }
    }
);*/

export default connect(
    ({todos}) => ({
        input: todos.input,
        todos: todos.todos
    }),
    {
        changeInput,
        insert,
        toggle,
        remove
    }
)(TodosContainer);
