import React from 'react';
import Todo from './todo.jsx';

export default React.createClass({
	render() {
		const {todos} = this.props;
		const TodoList = todos.map((todo) => {
			const key = `todo-${todo.id}`;
			return <Todo todo={todo} {...this.props} key={key} />;
		});
		return (
			<ul className="todo-list">
				{TodoList}
			</ul>
		);
	}
});
