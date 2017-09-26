
const initialState = {
  schoolList: {
      fetching: false,
      fetched: false,
      error: false,
      list: []
  },
    schoolFilter: {
        fetching: false,
        fetched: false,
        error: false,
        level: [],
        typeOfSchool: [],
        typesOfSyllabus: []
    }
}


const schools = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_SCHOOLS_SUCCESS':
            return Object.assign({}, state, {
                schoolList: {
                    fetched: true,
                    list: action.payload
                }
            })

        case 'GET_FILTER_PARAMS_SUCCESS':
            return Object.assign({}, state, {
                schoolFilter: {
                    fetched: true,
                    level: action.payload.levelOfEducation,
                    typeOfSchool: action.payload.type,
                    typesOfSyllabus: action.payload.syllabus
                }
            })

        default:
            return state;
    }
}


export default schools;

