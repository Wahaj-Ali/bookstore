// default state
const defaultState = {
  categories: [],
};

const STATUS_CHK = 'STATUS_CHECK';

// actions

export const checkStatus = () => ({
  type: STATUS_CHK,
});

const catergoryReducer = (state = defaultState, action) => {
  switch (action.type) {
    case STATUS_CHK:
      return {
        categories: [...state, 'Under Construction'],
      };
    default:
      return state;
  }
};

export default catergoryReducer;
