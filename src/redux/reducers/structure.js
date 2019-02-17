const initialState = {
  structure: [{
    label: 'nome',
    componentId: 'nome0',
    type: 'textfield',
    helpBlock: null
  }],
  updateFlag: true,
  calendarFlag: false,
  starRating: 0
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
    case 'SET_CALENDAR_FLAG':
      return {
        ...state,
        calendarFlag: action.calendarFlag
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

export default structure;