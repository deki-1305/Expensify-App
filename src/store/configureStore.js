import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// ovde kombinujemo i devtools(ako postoji) i enhancer da budu aktivni(spaja ga dole)

export default () => {const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer,
        auth: authReducer
    }), 
    composeEnhancers(applyMiddleware(thunk)) //dodavanje enhancera(vidi createStore def.)
    //da nema DEVTOOLS-a samo bi stavili applyMiddleware(thunk) i gotovo
    //ovo umesto window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);    
    return store;
};


// ovo gore window......sluzi dodavanju redux devtoolsa da se vide u browseru dole