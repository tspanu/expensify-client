import { createStore, combineReducers } from 'redux'
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'


export default () => {
    if (process.env.NODE_ENV === 'development' && window.store) {
        return window.store
    }
    const store = createStore(combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer,
    }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    if (process.env.NODE_ENV === 'development') {
        window.store = store
    }
    return store
}