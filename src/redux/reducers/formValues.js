const initialState = {
  formValues: {},
  starRating: 0
}

const formValues = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_VALUE':
      return {
        ...state,
        formValues: {
          ...state.formValues,
          [action.updateField]: action.updateValue
        }
      }
    case 'RESET_FORM_VALUES':
      return {
        ...state,
        formValues: {}
      }
    case 'SET_STAR_RATING':
      return {
        ...state,
        starRating: action.starRating
      }
    default: {
      return state;
    }
  }
};

export default formValues;