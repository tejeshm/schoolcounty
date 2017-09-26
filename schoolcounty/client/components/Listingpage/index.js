import React, {Component} from 'react'
import ListUnit from "./ListUnit/index";
import * as SchoolActions from '../../actions/schools'
import { connect } from 'react-redux'



class Listingpage extends Component{



    render(){

        const { schools } = this.props;


        let schoolListDiv = [];
        let schoolList = schools.list;
        for (let schoolIndex in schoolList) {
            let schoolDetails = schoolList[schoolIndex];
            schoolListDiv.push(
                <li class="mix color-3 check1 radio2 option3" key = {schoolIndex}>
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

export default Listingpage;
