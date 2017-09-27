import React,{Component} from 'react'

class CompareFilter extends Component{
    render(){
        return(
            <header style={{padding:" 20px"}}>
                <h2>Compare Schools</h2>

                <div class="actions" style={{float:" right"}}>

                    <a href="listing.html" class="filter" style={{cursor:" pointer", backgroundColor: "#9dc997", padding: ".6em 2em", marginLeft: "1.6em"}}>Reset</a>
                </div>
            </header>
        )
    }
}

export default CompareFilter