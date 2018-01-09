import { ADD_TODO, REMOVE_TODO, GET_STAR } from './todoActionTypes'

export const initialState = {
  todos: [],
  star: 0,
  error: '',
}

/**
 * Todo Reducer
 * @param {*} state 
 * @param {{ type: string, data: [], error: string }} action 
 * @return {initalState}
 */
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
		case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Math.random().toString(36).substring(2),
            text: action.text
          }
			  ]
      }
		case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(i => i !== action.todo)
      }
        
    case GET_STAR.SUCCESS:
      return {
        ...state,
        star: action.data,
      }
    case GET_STAR.FAILURE:
      return {
        ...state,
        error: action.error.message,
      }
		default:
			return state
	}
}
