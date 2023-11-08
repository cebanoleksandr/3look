import { Category } from "../utils/types/category";

const SET_CATEGORIES = 'SET_CATEGORIES';
const ADD_CATEGORY = 'ADD_CATEGORY';
const REMOVE_CATEGORY = 'REMOVE_CATEGORY';
const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
const SET_NEW_TITLE = 'SET_NEW_TITLE';

const initialState: InitialState = {
  items: [],
  newTitle: '',
};

type InitialState = {
  items: Category[],
  newTitle: string,
};

const categoriesReducer = (
  state = initialState,
  action: ActionTypes,
): InitialState => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        items: action.payload,
        newTitle: '',
      };

    case ADD_CATEGORY:
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case REMOVE_CATEGORY:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };

    case UPDATE_CATEGORY:
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id === action.payload.id) {
            return action.payload;
          } 

          return item;
        }),
      };

    case SET_NEW_TITLE:
      return {
        ...state,
        newTitle: action.payload,
      };
  
    default:
      break;
  }
  return state;
}

//action creators
export const setCategoriesAC = (categories: Category[]): SetCategories => {
  return {
    type: SET_CATEGORIES,
    payload: categories,
  }
}

export const addCategoryAC = (category: Category): AddCategory => {
  return {
    type: ADD_CATEGORY,
    payload: category,
  }
}

export const deleteCategoryAC = (categoyId: number): DeleteCategory => {
  return {
    type: REMOVE_CATEGORY,
    payload: categoyId,
  }
}

export const updateCategoryAC = (categoy: Category): UpdateCategory => {
  return {
    type: UPDATE_CATEGORY,
    payload: categoy,
  }
}

export const setTitleAC = (title: string): SetTitle => {
  return {
    type: SET_NEW_TITLE,
    payload: title,
  }
}

type SetCategories = {
  type: typeof SET_CATEGORIES,
  payload: Category[],
}

type AddCategory = {
  type: typeof ADD_CATEGORY,
  payload: Category,
}

type DeleteCategory = {
  type: typeof REMOVE_CATEGORY,
  payload: number,
}

type UpdateCategory = {
  type: typeof UPDATE_CATEGORY,
  payload: Category,
}

type SetTitle = {
  type: typeof SET_NEW_TITLE,
  payload: string,
}

type ActionTypes = SetCategories | AddCategory | DeleteCategory | UpdateCategory | SetTitle;

export default categoriesReducer;
