import React from 'react';
import {connect} from 'react-redux';
import Form from './form.jsx';
import TodoList from './todo-list.jsx';
import Visibility from './visibility.jsx';
import addTodo from '../actions/add-todo';
import removeTodo from '../actions/remove-todo';
import setVisibility from '../actions/set-visibility';
import toggleCompleted from '../actions/toggle-completed';
import * as visibilityTypes from '../actions/visibility-types';

const App = React.createClass({
	handleSubmit(title) {
		this.props.dispatch(addTodo(title));
	},
	handleToggleCompleted(id) {
		this.props.dispatch(toggleCompleted(id));
	},
	handleRemoveTodo(id) {
		this.props.dispatch(removeTodo(id));
	},
	setVisibility(e) {
		e.preventDefault();
		this.props.dispatch(setVisibility(e.target.value));
	},
	render() {
		const {visibleTodos, visibilityFilter} = this.props;
		return (
			<main className="todo-container">
				<Form handleSubmit={this.handleSubmit}/>
				<TodoList todos={this.props.visibleTodos} handleToggleCompleted={this.handleToggleCompleted} handleRemoveTodo={this.handleRemoveTodo} />
				<Visibility setVisibility={this.setVisibility} visibilityFilter={visibilityFilter} />
			</main>
		);
	}
});

const visibleTodos = (todos, visibiltyFilter) => {
	switch (visibiltyFilter) {
		case visibilityTypes.SHOW_COMPLETED:
			return todos.filter((todo) => todo.completed);

		case visibilityTypes.SHOW_ACTIVE:
			return todos.filter((todo) => !todo.completed);

		case visibilityTypes.SHOW_ALL:
		default:
			return todos;
	}
};

const select = (state) => {
	return {
		visibleTodos: visibleTodos(state.todos, state.visibilityFilter),
		visibilityFilter: state.visibilityFilter
	};
};

export default connect(select)(App);
