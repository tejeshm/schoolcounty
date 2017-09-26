
export const getSchoolsList = () => {
    let schoolList = [{
            name: 'Wisdom School'
        },
        {
            name: 'DPS Bangalore South'
        },
        {
            name: 'Timpany School'
        }
        ];
    return {type: "GET_SCHOOLS_SUCCESS", payload: schoolList};
}


export const getFilterParams = () => {
    let levelOfEducation = [
        'Primary(1st-4th)',
        'Middle(5th-7th)',
        'Secondary(8th-10th)',
    ];

    let syllabus = [
        'CBSE',
        'STATE BOARD',
        'ICSE',
        'IB'
    ]
    let type = [
        'Army',
        'KV',
        'International'
    ]

    let filterParams = {levelOfEducation, syllabus, type}

    return {type: "GET_FILTER_PARAMS_SUCCESS", payload: filterParams};
}