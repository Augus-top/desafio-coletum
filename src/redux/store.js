import { createStore, combineReducers } from 'redux';
import structure from './reducers/structure';
import availableForms from './reducers/availableForms';
import formValues from './reducers/formValues';

const reducer = combineReducers({
  formStructure: structure,
  availableForms,
  formValues
});

export default createStore(reducer);