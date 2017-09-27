import React,{Component} from 'react'

import CompareUnit from './CompareUnit/index'
import CompareFilter from './CompareFilter/index'

class Comparepage extends Component{
    render(){
        return(
            <div style={{padding:"20px"}}            >

            <CompareFilter/>

            <div class="limit-width-1200">
                <div class="mha oh js-comparedSchoolsListContainer">
                    <div class="js-comparedSchoolsList" style={{width:"1200px"}}>


                        <CompareUnit/>

                        <CompareUnit/>

                        <CompareUnit/>

                        <CompareUnit/>




                        <a id="back-to-top" href="#" class="btn btn-primary btn-lg back-to-top" role="button" title="Click to return on the top page" data-toggle="tooltip" data-placement="left"><span class="glyphicon glyphicon-chevron-up"></span></a>



                    </div>
                </div>
            </div>


            </div>
        )
    }
}


export default Comparepage