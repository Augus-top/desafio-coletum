import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import structure from './reducers/structure';
import availableForms from './reducers/availableForms';

const reducer = combineReducers({
  form: reduxFormReducer,
  structure: structure,
  forms: availableForms
});

export default createStore(reducer);