
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Comparepage from '../../components/Comparepage/index'

import * as SchoolUnitAction from '../../actions/schools'


class SchoolCompare extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        //action to get schools data
        this.props.getSchools();
    }


    render() {
        const { todos, actions, children , schoolList} = this.props
        console.log("hi");
        console.log(schoolList);
        for(let units in schoolList){
            console.log(units.fetched);
        }
        if (!schoolList.fetched){
             return (<div>
                 no data
             </div>)
        }

        return (
            <div>
                <Header />

                <Comparepage schoolUnits={schoolList.schoolList} />

                <Footer/>
            </div>
        )
    }
}

function mapStateToProps(state) {

    return {
        schoolList: state.schools,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getSchools: () => {
            console.log('called');
            dispatch(SchoolUnitAction.getCompareSchoolUnitParams());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SchoolCompare)
