const initialState = {
  forms: [{
    id: '6950',
    name: 'Cadastro de Pokémon',
    status: 'enabled',
    category: 'Desafio front-end',
    answerTracking: true,
    publicAnswers: false
  }],
  current_form: {
    id: 6950,
    name: 'Cadastro de Pokémon'
  }
}

const availableForms = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FORMS':
      return {
        forms: action.forms
      };
    case 'SET_CURRENT_FORM':
      return {
        current_form: action.selected_form
      }
    default: {
      return state;
    }
  }
};

export default availableForms;