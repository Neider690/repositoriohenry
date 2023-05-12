import { createStore, applyMiddleware, compose} from "redux"
import thunkMiddleware  from "redux-thunk"
import  reducer  from "./reducer"

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // esta linea sirve para conectar la app con la extension del navegador 
const store = createStore (
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))// esta linea sirce para que podamos hacer la peticion a una api/ servidor 


);

export default store;