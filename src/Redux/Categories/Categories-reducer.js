import { Categories } from '../../Data/Categories';
import { SELECT_CATEGORY } from './Categories-actions';

const INITIAL_STATE = {
  categories: Categories,
  selectedCategory: null,
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_CATEGORY: {
      return {
        ...state,
        selectedCategory:
          action.payload !== state.selectedCategory ? action.payload : null,
      };
    }

    default:
      return state;
  }
};

export default categoriesReducer;