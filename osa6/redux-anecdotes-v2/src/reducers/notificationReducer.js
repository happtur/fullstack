
const notificationReducer = (state = 'hello', action) => {
    if (action.type==='SET_NOTIFICATION') {
  
      return action.data.message
    }
  
    return state
  }

  export const settingNotification = (message) => {
    return {
      type: 'SET_NOTIFICATION',
      data: {message}
    }
  }

export default notificationReducer