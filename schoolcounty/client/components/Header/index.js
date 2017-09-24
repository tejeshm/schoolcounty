
import React, { Component } from 'react'
import TodoTextInput from '../TodoTextInput'
import LogReg from '../LogReg'


class Header extends Component {


  render() {
    return (
      <div>
        <nav class="main-nav navbar navbar-fixed-top" style={{backgroundColor: 'mediumslateblue'}}>
          <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="index.html" style={{color: '#fff',fontSize: '50px'}}>SchoolCounty</a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
              <ul class="nav navbar-nav navbar-right">
                <li><a class="cd-signin" href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                <li><a class="cd-signup" href="#"><span class="glyphicon glyphicon-log-in"></span> SignUp</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <LogReg />

    </div>
    )
  }
}

export default Header
