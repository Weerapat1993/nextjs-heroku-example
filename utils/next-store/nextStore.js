/**
 * @typedef {Object} Todo
 * @property {Array} todos
 * @property {number} star
 * @property {string} error
 * 
 * @typedef {Object} DataStore
 * @property {Todo} todo
 */

/**
 * Next Redux Wrapper
 * @param {getState} getState
 * @return {DataStore}
 */
export const nextStore = (getState) => getState()

export const nextDispatch = (store, callback) => {
  const { dispatch, getState } = store
  return () => store
}
