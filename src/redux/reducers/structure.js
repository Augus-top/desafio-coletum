const initialState = {
  structure: [{
    label: 'nome',
    componentId: 'nome0',
    type: 'textfield',
    helpBlock: null
  }],
  updateFlag: true
}

const structure = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE':
      return {
        ...state,
        structure: action.structure
      };
    case 'SET_UPDATE_FLAG':
      return {
        ...state,
        updateFlag: action.updateFlag
      }
    default: {
      return state;
    }
  }
};

export default structure;