const initialState = {
  structure: [{
    label: 'nome',
    componentId: 'nome0',
    type: 'textfield',
    helpBlock: null
  }]
}

const structure = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE':
      return {
        structure: action.structure
      };
    default: {
      return state;
    }
  }
};

export default structure;