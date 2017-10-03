
export const getSchoolsList = () => {
    let schoolList = [{
            name: 'Wisdom School',
            location:'Rajajinagar',
            review:'16',
            website:'wisdomschool.edu',
            schoolrating:'5',
            testscorerating:'5',
            studentsenrolled:'500',
            transportation:'20',
            beforecare:'6',
            afterschool:'15',
            worldlanguage:'5',
            clubs:'15',
            sports:'18',
            artsmusic:'5',
            hindu:'30',
            muslim:'13',
            jain:'7',
            christian:'18',
            sikh:'12',
            scst:'13',
            nri:'7'

        },
        {
            name: 'DPS Bangalore South',
            location:'JayaNagar',
            review:'25',
            website:'dpssouthbangalore.edu',
            schoolrating:'4.6',
            testscorerating:'5',
            studentsenrolled:'500',
            transportation:'20',
            beforecare:'6',
            afterschool:'15',
            worldlanguage:'5',
            clubs:'15',
            sports:'18',
            artsmusic:'5',
            hindu:'30',
            muslim:'13',
            jain:'7',
            christian:'18',
            sikh:'12',
            scst:'13',
            nri:'7'


        },
        {
            name: 'Timpany School',
            location:'Kanakapura',
            review:'22',
            website:'timpanybangalore.edu',
            schoolrating:'3.8'
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


export const getCompareSchoolDetailsParams =()=>{


    let schoolDetails =
        {
            schoolNameAdress : {
                name: 'DPS South Bangalore',
                address: 'kanakapura Road,Bangalore-21'

            },

             schoolCountyRating : {
                schoolscountyrating:'5',
                testscorerating:'5',
            },

             schoolFacilities : {
                studentsenrolled:'500',
                transportation:'20',
                beforecare:'6',
                afterschool:'15',
            },

             schoolActivites : {
                worldlanguage:'5',
                clubs:'15',
                sports:'18',
                artsmusic:'5',
            },

             schoolDiversity :{
                hindu:'30',
                muslim:'13',
                jain:'7',
                christian:'18',
                sikh:'12',
                scst:'13',
                nri:'7'

            }
        };

    return {type:"GET_COMPARESCHOOLDETAIL_SUCCESS",payload:schoolDetails};
}
