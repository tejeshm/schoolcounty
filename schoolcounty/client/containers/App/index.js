
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import MainSection from '../../components/MainSection'
import * as TodoActions from '../../actions/todos'

class App extends Component {
  render() {
    const { todos, actions, children } = this.props
    return (
        <body>

        {/*<nav class="main-nav navbar navbar-fixed-top" style={{background-color: 'mediumslateblue'}}>
          <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="index.html" style="color:#fff;font-size: 50px;">SchoolCounty</a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
              <ul class="nav navbar-nav navbar-right">
                <li><a class="cd-signin" href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                <li><a class="cd-signup" href="#"><span class="glyphicon glyphicon-log-in"></span> SignUp</a></li>
              </ul>
            </div>
          </div>
        </nav>*/}
        <Header/>
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

          <div class="cd-user-modal">
            <div class="cd-user-modal-container">
              <ul class="cd-switcher">
                <li><a href="#0">Sign in</a></li>
                <li><a href="#0">New account</a></li>
              </ul>

              <div id="cd-login">
                <form class="cd-form">
                  <p class="fieldset">
                    <label class="image-replace cd-email" for="signin-email">E-mail</label>
                    <input class="full-width has-padding has-border" id="signin-email" type="email" placeholder="E-mail"/>
                      <span class="cd-error-message">Error message here!</span>
                  </p>

                  <p class="fieldset">
                    <label class="image-replace cd-password" for="signin-password">Password</label>
                    <input class="full-width has-padding has-border" id="signin-password" type="text"  placeholder="Password"/>
                      <a href="#0" class="hide-password">Hide</a>
                      <span class="cd-error-message">Error message here!</span>
                  </p>

                  <p class="fieldset">
                    <input type="checkbox" id="remember-me" checked />
                      <label for="remember-me">Remember me</label>
                  </p>

                  <p class="fieldset">
                    <input class="full-width" type="submit" value="Login"/>
                  </p>
                </form>

                <p class="cd-form-bottom-message"><a href="#0">Forgot your password?</a></p>

              </div>

              <div id="cd-signup">

                <div class="cd-form row">
                  <div class="col-xs-12 col-md-3 col-sm-2">
                    <a href="#" class="btn btn-lg btn-block omb_btn-facebook" style={{background: '#3b5998'}}>
                      <i class="fa fa-facebook visible-xs"></i>
                      <span>Facebook</span>
                    </a>
                  </div>
                  <div class="col-xs-12 col-md-3 col-sm-2">
                    <a href="#" class="btn btn-lg btn-block omb_btn-twitter" style={{background: '#00aced'}}>
                      <i class="fa fa-twitter visible-xs"></i>
                      <span>Twitter</span>
                    </a>
                  </div>
                  <div class="col-xs-12 col-md-3 col-sm-2">
                    <a href="#" class="btn btn-lg btn-block omb_btn-google" style={{background: '#c32f10'}}>
                      <i class="fa fa-google-plus visible-xs"></i>
                      <span>Google+</span>
                    </a>
                  </div>
                  <div class="col-xs-12 col-md-3 col-sm-2">
                    <a href="#" class="btn btn-lg btn-block omb_btn-linkedin" style={{background: '#a4c639'}}>
                      <i class="fa fa-linkedin-square visible-xs"></i>
                      <span>Linkedin</span>
                    </a>
                  </div>
                </div>







                <form class="cd-form">
                  <p class="fieldset">
                    <label class="image-replace cd-username" for="signup-username">Username</label>
                    <input class="full-width has-padding has-border" id="signup-username" type="text" placeholder="Username"/>
                      <span class="cd-error-message">Error message here!</span>
                  </p>

                  <p class="fieldset">
                    <label class="image-replace cd-email" for="signup-email">E-mail</label>
                    <input class="full-width has-padding has-border" id="signup-email" type="email" placeholder="E-mail"/>
                      <span class="cd-error-message">Error message here!</span>
                  </p>

                  <p class="fieldset">
                    <label class="image-replace cd-password" for="signup-password">Password</label>
                    <input class="full-width has-padding has-border" id="signup-password" type="text"  placeholder="Password"/>
                      <a href="#0" class="hide-password">Hide</a>
                      <span class="cd-error-message">Error message here!</span>
                  </p>

                  <p class="fieldset">
                    <input type="checkbox" id="accept-terms"/>
                      <label for="accept-terms">I agree to the <a href="#0">Terms & Conditions</a></label>
                  </p>

                  <p class="fieldset">
                    <input class="full-width has-padding" type="submit" value="Create account"/>
                  </p>
                </form>

              </div>

              <div id="cd-reset-password">
                <p class="cd-form-message">Lost your password? Please enter your email address. You will receive a link to create a new password.</p>

                <form class="cd-form">
                  <p class="fieldset">
                    <label class="image-replace cd-email" for="reset-email">E-mail</label>
                    <input class="full-width has-padding has-border" id="reset-email" type="email" placeholder="E-mail" />
                      <span class="cd-error-message">Error message here!</span>
                  </p>

                  <p class="fieldset">
                    <input class="full-width has-padding" type="submit" value="Reset password"/>
                  </p>
                </form>

                <p class="cd-form-bottom-message"><a href="#0">Back to log-in</a></p>
              </div>
            </div>
          </div>




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
