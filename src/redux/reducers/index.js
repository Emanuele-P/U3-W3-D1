const initialState = {
  favouriteJob: {
    content: [],
  },
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVOURITE':
      return {
        ...state,
        favouriteJob: {
          ...state.favouriteJob,

          content: [...state.favouriteJob.content, action.payload],
        },
      }
    case 'REMOVE_FAVOURITE':
      return {
        ...state,
        favouriteJob: {
          ...state.favouriteJob,

          content: state.favouriteJob.content.filter(
            (data) => data._id !== action.payload
          ),
        },
      }
    case 'REMOVE_FROM_FAVOURITE':
      return {
        ...state,
        favouriteJob: {
          ...state.favouriteJob,

          content: state.favouriteJob.content.filter(
            (item) => item._id !== action.payload
          ),
        },
      }
    default:
      return state
  }
}

export default mainReducer
