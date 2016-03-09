/* @flow */
import React, { Component, PropTypes } from "react";

export default class TodoList extends Component {
    render () {
        const todos = this.renderTodos();
        return (
            <div>
                {todos}
            </div>
        );
    }

    renderTodos () {
        if (!this.props.todos) return;

        return this.props.todos.map((todo, index) => {
            return <div key={index}>{todo}</div>;
        });
    }
}