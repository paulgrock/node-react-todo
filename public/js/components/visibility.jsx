import React from 'react';
import * as visibilityTypes from '../actions/visibility-types';

export default React.createClass({
	render() {
		const {setVisibility, visibilityFilter} = this.props;
		const visibilityFilters = Object.keys(visibilityTypes).map((filter, index) => {
			const type = filter.replace('SHOW_', '');
			const key = `visbilityFilter-${index}`;
			let classList = 'btn';
			if (visibilityFilter === filter) {
				classList += ' is-active';
			}
			return (
				<li key={key} className="visibility-filters">
					<button onClick={setVisibility} value={filter} className={classList}>{type}</button>
				</li>
			);
		});

		return (
			<ul className="visbility-filter">
				{visibilityFilters}
			</ul>
		);
	}
});
