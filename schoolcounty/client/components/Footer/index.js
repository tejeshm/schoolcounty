
import React, { Component } from 'react'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../constants/filters'
import classnames from 'classnames'
import style from './style.css'

const FILTER_TITLES = {
    [SHOW_ALL]: 'All',
    [SHOW_ACTIVE]: 'Active',
    [SHOW_COMPLETED]: 'Completed'
}

class Footer extends Component {
    renderTodoCount() {
        const { activeCount } = this.props
        const itemWord = activeCount === 1 ? 'item' : 'items'

        return (
            <span className={style.count}>
        <strong>{activeCount || 'No'}</strong> {itemWord} left
      </span>
        )
    }

    renderFilterLink(filter) {
        const title = FILTER_TITLES[filter]
        const { filter: selectedFilter, onShow } = this.props

        return (
            <a className={classnames({ [style.selected]: filter === selectedFilter })}
               style={{ cursor: 'pointer' }}
               onClick={() => onShow(filter)}>
                {title}
            </a>
        )
    }

    renderClearButton() {
        const { completedCount, onClearCompleted } = this.props
        if (completedCount > 0) {
            return (
                <button className={style.clearCompleted} onClick={onClearCompleted} >
                  Clear completed
                </button>
            )
        }
    }

    render() {
        return (
            <div>
              <footer class="footer1">
                <div class="container">

                  <div class="row">

                    <div class="col-lg-3 col-md-3">
                      <ul class="list-unstyled clear-margins">

                        <li class="widget-container widget_nav_menu">

                          <h1 class="title-widget">Quick links</h1>

                          <ul>
                            <li><a  href="#"><i class="fa fa-angle-double-right"></i> About Us</a></li>
                            <li><a  href="#"><i class="fa fa-angle-double-right"></i> Contact Us</a></li>
                            <li><a  href="#"><i class="fa fa-angle-double-right"></i> Success Stories</a></li>
                            <li><a  href="#"><i class="fa fa-angle-double-right"></i> PG Courses</a></li>
                            <li><a  href="#"><i class="fa fa-angle-double-right"></i> Achiever's Batch</a></li>
                            <li><a  href="#"><i class="fa fa-angle-double-right"></i>  Regular Batch</a></li>
                            <li><a  href="#"><i class="fa fa-angle-double-right"></i>  Test & Discussion</a></li>
                            <li><a  href="#"><i class="fa fa-angle-double-right"></i>  Fast Track T & D</a></li>
                          </ul>

                        </li>

                      </ul>


                    </div>



                    <div class="col-lg-3 col-md-3">

                      <ul class="list-unstyled clear-margins">

                        <li class="widget-container widget_nav_menu">



                          <ul>
                            <li><a  href="#"><i class="fa fa-angle-double-right"></i>  Test Series Schedule</a></li>
                            <li><a  href="#"><i class="fa fa-angle-double-right"></i>  Postal Coaching</a></li>
                            <li><a  href="#"><i class="fa fa-angle-double-right"></i>  PG Dr. Bhatia Books</a></li>
                            <li><a  href="#"><i class="fa fa-angle-double-right"></i>  UG Courses</a></li>
                            <li><a  href="#"><i class="fa fa-angle-double-right"></i>  Satellite Education</a></li>
                            <li><a  href="#"><i class="fa fa-angle-double-right"></i>  Study Centres</a></li>
                            <li><a  href="#"><i class="fa fa-angle-double-right"></i>  State P.G. Mocks</a></li>
                            <li><a  href="#" target="_blank"><i class="fa fa-angle-double-right"></i> Results</a></li>

                          </ul>

                        </li>

                      </ul>


                    </div>



                    <div class="col-lg-3 col-md-3">

                      <ul class="list-unstyled clear-margins">

                        <li class="widget-container widget_nav_menu">



                          <ul>


                            <li><a href="#"><i class="fa fa-angle-double-right"></i> Enquiry Form</a></li>
                            <li><a href="#"><i class="fa fa-angle-double-right"></i> Online Test Series</a></li>
                            <li><a href="#"><i class="fa fa-angle-double-right"></i> Grand Tests Series</a></li>
                            <li><a href="#"><i class="fa fa-angle-double-right"></i> Subject Wise Test Series</a></li>
                            <li><a href="#"><i class="fa fa-angle-double-right"></i> Smart Book</a></li>
                            <li><a href="#"><i class="fa fa-angle-double-right"></i> Test Centres</a></li>
                            <li><a href="#"><i class="fa fa-angle-double-right"></i>  Admission Form</a></li>
                            <li><a href="#"><i class="fa fa-angle-double-right"></i>  Computer Live Test</a></li>

                          </ul>

                        </li>

                      </ul>


                    </div>


                    <div class="col-lg-3 col-md-3">



                      <ul class="list-unstyled clear-margins">

                        <li class="widget-container widget_recent_news">

                          <h1 class="title-widget">Contact Detail </h1>

                          <div class="footerp">

                            <h2 class="title-median">SchoolCounty</h2>
                            <p><b>Email id:</b> <a href="mailto:info@webenlance.com">info@schoolcounty.com</a></p>
                            <p><b>Helpline Numbers </b>

                              <b style={{color: '#ffc106'}}>(8AM to 10PM):</b>  +91-813ZXC90, +91-81MBN0010  </p>

                            <p><b>Corp Office / Postal Address</b></p>
                            <p><b>Phone Numbers : </b>704QWE160, </p>
                            <p> 011-27568832, 9868387223</p>
                          </div>

                          <div class="social-icons">

                            <ul class="nomargin">

                              <a href="https://www.facebook.com/bootsnipp"><i class="fa fa-facebook-square fa-3x social-fb" id="social"></i></a>
                              <a href="https://twitter.com/bootsnipp"><i class="fa fa-twitter-square fa-3x social-tw" id="social"></i></a>
                              <a href="https://plus.google.com/+Bootsnipp-page"><i class="fa fa-google-plus-square fa-3x social-gp" id="social"></i></a>
                              <a href="mailto:bootsnipp@gmail.com"><i class="fa fa-envelope-square fa-3x social-em" id="social"></i></a>
                              <a href="mailto:linkedin@gmail.com"><i class="fa fa-linkedin-square fa-3x social-fb" id="social"></i></a>

                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </footer>

              <div class="footer-bottom">

                <div class="container">

                  <div class="row">

                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">

                      <div class="copyright">

                        © 2017, SchoolCounty, All rights reserved

                      </div>

                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">

                      <div class="design">

                        <a href="#">SchoolCounty </a> |  <a target="_blank" href="http://www.webenlance.com">Dummy Content</a>

                      </div>

                    </div>

                  </div>

                </div>

              </div>
            </div>
        )
    }
}

export default Footer
