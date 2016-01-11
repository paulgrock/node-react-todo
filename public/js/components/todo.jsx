import React from 'react';

export default React.createClass({
	toggleCompleted() {
		this.props.handleToggleCompleted(this.props.todo.id);
	},
	handleRemoveTodo() {
		this.props.handleRemoveTodo(this.props.todo.id);
	},
	render() {
		const {todo} = this.props;
		let classList = 'todo-list__item';
		classList += todo.completed === true ? ' is-completed' : '';
		return (
			<li className={classList}>
				<span onClick={this.toggleCompleted} className="todo-list-title">{todo.title}</span>
				<button onClick={this.handleRemoveTodo} className="btn btn--remove">
					<i className="fa fa-minus"></i>
				</button>
			</li>
		);
	}
});
