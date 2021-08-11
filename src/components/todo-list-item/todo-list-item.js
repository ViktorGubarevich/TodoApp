import React from 'react';
import './todo-list-item.css'

const TodoListItem = ({
    label, onDeleted,
    onToggleImportant,
    onToggleDone,
    important, done }) => {

    let classNames = 'todo-list-item';

    if (done) {
        classNames += ' done';
    }

    if (important) {
        classNames += ' important';
    }

    return (
        <span className={classNames}>
            <span
                className="todo-list-item-label"
                onClick={onToggleDone} >
                {label}
            </span>

            <button type="button"
                className="btn btn-outline-success btn-sm float-end"
                onClick={onToggleImportant}>
                <i className="fa">&#xf12a;</i>
            </button>

            <button type="button"
                className="btn btn-outline-danger btn-sm float-end"
                onClick={onDeleted}>
                <i className="fa">&#xf014;</i>
            </button>
        </span>
    );
}

export default TodoListItem;