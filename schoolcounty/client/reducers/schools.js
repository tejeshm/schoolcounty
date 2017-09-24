
import { handleActions } from 'redux-actions'

const initialState = {
  schoolList: [
      {
        name: 'Wisdom School'
    },
    {
        name: 'DPS Bangalore South'
    },
    {
        name: 'Timpany School'
    },
  ],
    schoolFilter: {
        level: [],
        typeOfSchool: [],
        typesOfSyllabus: []
    }
}

export default handleActions({
  'get schools' (state, action) {
    return [{}, ...state]
  }
}, initialState)
