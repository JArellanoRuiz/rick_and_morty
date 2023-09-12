import { createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from '../redux/reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// conecta la app con la extension redux devtools con el navegador

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
    //esto sirve para que podamos hacer peticiones a una API / Servidor
    );

export default store;