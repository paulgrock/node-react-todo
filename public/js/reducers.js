import * as types from './actions/types';
const initialState = {
	todos: [],
	visibilityFilter: 'SHOW_ALL'
};

const reducers = function (state = initialState, action) {
	switch (action.type) {
		case types.ADD_TODO: {
			return Object.assign({}, state, {
				todos: [...state.todos, {
					title: action.title,
					completed: action.completed,
					id: action.id
				}]
			});
		}

		case types.SET_VISIBILITY: {
			return Object.assign({}, state, {
				visibilityFilter: action.visibilityFilter
			});
		}

		case types.TOGGLE_COMPLETED: {
			const todos = state.todos.map((todo) => {
				if (todo.id === action.id) {
					todo.completed = !todo.completed;
				}
				return todo;
			});
			return Object.assign({}, state, {
				todos
			});
		}

		case types.REMOVE_TODO: {
			const todos = state.todos.filter((todo) => {
				return todo.id !== action.id;
			});

			return Object.assign({}, state, {
				todos
			});
		}

		default:
			return state;
	}
};

export default reducers;
