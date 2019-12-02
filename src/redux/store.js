import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/reducers';
import { save } from "redux-localstorage-simple";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const configureStore = preloadedState => (
    createStore(
        rootReducer,
        preloadedState,
        composeEnhancers(
            applyMiddleware(save({namespace: "todo-list"}))
        ),
    )
);

const store = configureStore({});

window.store = store;

export default store;