import axios from 'axios'
import { ADD_TODO, REMOVE_TODO, GET_STAR } from './todoActionTypes'

export const addTodo = (text) => ({
  type: ADD_TODO,
  text
})

export const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  todo
})

export const getStarRequest = () => ({ type: GET_STAR.REQUEST }) 
export const getStarSuccess = (data) => ({ type: GET_STAR.SUCCESS, data }) 
export const getStarFailure = (error) => ({ type: GET_STAR.FAILURE, error }) 
export const getStar = () => (dispatch, getState) => {
  dispatch(getStarRequest())
  return axios({
    method: 'GET',
    responseType: 'json',
    url: 'https://api.github.com/repos/ooade/NextSimpleStarter',
  })
    .then(res => dispatch(getStarSuccess(res.data.stargazers_count)))
    .catch(error => dispatch(getStarFailure(error)))
}
