import {SET_VISIBILITY} from './types';

export default (type) => ({
	type: SET_VISIBILITY,
	visibilityFilter: type
});
