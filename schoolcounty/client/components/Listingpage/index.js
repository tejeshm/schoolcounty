import React, {Component} from 'react'
import ListUnit from "./ListUnit/index";
import * as SchoolActions from '../../actions/schools'
import { connect } from 'react-redux'



class Listingpage extends Component{

    componentWillMount(){
        //action to get schools data
        SchoolActions.getSchools();

    }

    render(){

        const { schools } = this.props;

        let schoolListDiv = [];
        console.log(schools.schoolFilter);
        for (let schoolIndex in schools.schoolList) {
            let schoolDetails = schools.schoolList[schoolIndex];
            schoolListDiv.push(
                <li class="mix color-3 check1 radio2 option3">
                    <ListUnit name={schoolDetails.name} />
                </li>
            );
        }

        return(
            <div>
            {schoolListDiv}
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

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Listingpage)
