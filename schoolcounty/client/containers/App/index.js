
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import Login from '../../components/Login'
import Footer from '../../components/Footer'
import MainSection from '../../components/MainSection'
import * as TodoActions from '../../actions/todos'

class App extends Component {
  render() {
    const { todos, actions, children } = this.props
    return (
        <body>
        <Header />
        <div class="jumbotron">
          <div class="container text-center">
            <h1 style={{color: '#fff'}}>Find the Right School for You</h1>
            <p style={{color: '#fff'}}>Start your search for a great school at SchoolCOunty.com! We have reviews,ratings,recommendation,location,scores,rankings,school and district boundaries,student/teacher ratios ,scores of other userful metrics and information of over 10,000 elementary,primary and high school in India!</p>
            <form class="search-wrapper" action="listing.html">
              <div class="inner-addon right-addon"><i class="glyphicon glyphicon-search"></i>
                <input id="searchInput" type="text" name="search" placeholder="Type a school,city,pincode,syllabus,district name........."/></div>
            </form>
          </div>
        </div>

        <div class="container-fluid bg-3 text-center">
          <h3>Feeling Lucky</h3><br/>
          <div class="row">
            <div class="col-sm-3">
              <p>School Name</p>
              <img src="../../assets/img/school1.jpg" class="img-responsive"  alt="Image" />
            </div>
            <div class="col-sm-3">
              <p>Education Stage</p>
              <img src="../../assets/img/school2.jpg" class="img-responsive"  alt="Image" />
            </div>
            <div class="col-sm-3">
              <p>School Type</p>
              <img src="../../assets/img/school3.jpg" class="img-responsive"  alt="Image" />
            </div>
            <div class="col-sm-3">
              <p>Syllabus</p>
              <img src="../../assets/img/school4.jpg" class="img-responsive"  alt="Image" />
            </div>
          </div>
        </div><br/>

          
          


          <div class="container-fluid bg-3 text-center">
            <div class="row">
              <div class="col-sm-3">
                <p>Sate Wise</p>
                <img src="../../assets/img/school4.jpg" class="img-responsive"  alt="Image" />
              </div>
              <div class="col-sm-3">
                <p>Rating Wise</p>
                <img src="../../assets/img/school3.jpg" class="img-responsive"  alt="Image" />
              </div>
              <div class="col-sm-3">
                <p>Ranking Wise</p>
                <img src="../../assets/img/school2.jpg" class="img-responsive"  alt="Image" />
              </div>
              <div class="col-sm-3">
                <p>Budget Wise</p>
                <img src="../../assets/img/school1.jpg" class="img-responsive"  alt="Image" />
              </div>
            </div>
          </div><br/><br/>
        <Footer/>
        </body>

  )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
