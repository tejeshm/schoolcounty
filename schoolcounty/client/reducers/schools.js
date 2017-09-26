
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


const schools = (state = initialState, action) => {
    switch (action.type) {
        case 'get schools':
            return Object.assign({}, state, state)

        default:
            return state
    }
}


export default schools

