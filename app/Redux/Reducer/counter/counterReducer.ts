const initialState = {
  count: 0,
  addValue: 1,
};

const counterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + state.addValue,
      };
    case 'decrement':
      return {
        ...state,
        count: state.count - state.addValue,
      };
    case 'changeValue':
      return {
        ...state,
        addValue: action.payload,
      };
    default:
      return state;
  }
};

export default counterReducer;
