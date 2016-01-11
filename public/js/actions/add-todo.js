import {ADD_TODO} from './types';
let nextId = 0;

export default (title) => ({
	type: ADD_TODO,
	id: nextId++,
	title,
	completed: false
});
