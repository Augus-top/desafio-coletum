const initialState = {
  forms: [{
    id: '6950',
    name: 'Cadastro de Pokémon',
    status: 'enabled',
    category: 'Desafio front-end',
    answerTracking: true,
    publicAnswers: false
  }],
  currentForm: {
    id: 6950,
    name: 'Cadastro de Pokémon',
  }
}

const availableForms = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FORMS':
      return {
        ...state,
        forms: action.forms,
      };
    case 'SET_CURRENT_FORM':
      return {
        ...state,
        currentForm: action.currentForm,
      }
    default: {
      return state;
    }
  }
};

export default availableForms;