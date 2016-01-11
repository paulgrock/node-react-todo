import React from 'react';

export default React.createClass({
	handleSubmit(e) {
		e.preventDefault();
		if (!this.refs.title.value) {
			return false;
		}
		this.props.handleSubmit(this.refs.title.value);
		this.refs.title.value = '';
	},
	render() {
		return (
			<form onSubmit={this.handleSubmit} className="todo">
				<input type="text" name="title" ref="title" className="todo__title"/>
				<button type="submit" className="btn todo__submit">
					<i className="fa fa-plus"></i>
				</button>
			</form>
		);
	}
});
