const form = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_FORM':
      return [
        ...state
      ]
    default:
      return state;
  }
}

export default form;