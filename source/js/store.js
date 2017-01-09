import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import * as reducers from 'js/reducers/root';

const middlewares = [
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : (f) => f
];

const store = createStore(
	combineReducers(reducers),
	compose.apply(null, middlewares)
);

if (module.hot) {
	module.hot.accept('js/reducers/root', () => {
		const nextReducer = require('js/reducers/root');
		store.replaceReducer(nextReducer);
	});
}

export default store;
