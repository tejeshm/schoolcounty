
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Comparepage from '../../components/Comparepage/index'

import * as SchoolUnitAction from '../../actions/schools'


class SchoolCompare extends Component {
    componentWillMount(){
        //action to get schools data
        this.props.getSchoolUnit();
    }


    render() {
        const { todos, actions, children } = this.props
        return (
            <div>
                <Header />

                <Comparepage schoolunit={this.props.schools.schoolUnit} />

                <Footer/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        schools: state.schools
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getSchoolUnit: () => {
            dispatch(SchoolUnitAction.getCompareSchoolUnitParams());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SchoolCompare)
