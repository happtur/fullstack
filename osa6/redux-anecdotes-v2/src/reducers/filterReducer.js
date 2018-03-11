
const filterReducer = (state = '', action) => {
    if (action.type==='SET_FILTER') {
  
      return action.data.filter
    }
  
    return state
  }

  export const setFilter = (filter) => {
    return {
      type: 'SET_FILTER',
      data: {filter}
    }
  }

export default filterReducer