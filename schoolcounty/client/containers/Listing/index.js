
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import GoogleMapReact from 'google-map-react';
import * as SchoolActions from '../../actions/schools'
import Listingpage from "../../components/Listingpage/index";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

  class Listing extends Component {


    render() {


        return (
            <div>
              <Header />
              <main class="cd-main-content" style={{top: '50px'}}>



                <div class="cd-tab-filter-wrapper">
                  <div class="cd-tab-filter">
                    <ul class="cd-filters">
                      <li class="placeholder">
                        <a data-type="all" href="#0">All</a>
                      </li>
                      <li class="filter"><a class="selected" href="#0" data-type="all">All</a></li>
                      <li class="filter" data-filter=".color-1"><a href="#0" data-type="color-1">Distance</a></li>
                      <li class="filter" data-filter=".color-2"><a href="#0" data-type="color-2">Budget</a></li>
                      <li class="filter" data-filter=".color-3"><a href="#0" data-type="color-3">Ranking</a></li>
                    </ul>
                  </div>
                </div>

                <section class="cd-gallery">
                  <div id="map">
                    <GoogleMapReact
                        defaultCenter={{lat: 12.971599, lng: 77.594563}}
                        defaultZoom={10}
                    >
                      <AnyReactComponent
                          lat={12.971599}
                          lng={77.594563}
                          text={'Kreyser Avrora'}
                      />
                    </GoogleMapReact>
                  </div>
                  <ul>

                     <Listingpage/>

                    <li class="mix">
                      <a id="back-to-top" href="#" class="btn btn-primary btn-lg back-to-top" role="button" title="Click to return on the top page" data-toggle="tooltip" data-placement="left"><span class="glyphicon glyphicon-chevron-up"></span></a>

                    </li>
                    <li class="gap"></li>
                    <li class="gap"></li>
                    <li class="gap"></li>
                  </ul>

                  <div class="cd-fail-message">No results found</div>
                </section>

                <div class="cd-filter">
                  <form>
                    <div class="cd-filter-block">
                      <h4>Search</h4>

                      <div class="cd-filter-content">
                        <input type="search" placeholder="Try color-1,color-2,color-3..."/>
                      </div>
                    </div>

                    <div class="cd-filter-block">
                      <h4>Levels of Education</h4>

                      <ul class="cd-filter-content cd-filters list">
                        <li>
                          <input class="filter" data-filter=".check1" type="checkbox" id="checkbox1"/>
                          <label class="checkbox-label" for="checkbox1">Primary(1st-4th)</label>
                        </li>

                        <li>
                          <input class="filter" data-filter=".check2" type="checkbox" id="checkbox2"/>
                          <label class="checkbox-label" for="checkbox2">Middle(5th-7th)</label>
                        </li>

                        <li>
                          <input class="filter" data-filter=".check3" type="checkbox" id="checkbox3"/>
                          <label class="checkbox-label" for="checkbox3">Secondary(8th-10th)</label>
                        </li>
                      </ul>
                    </div>

                    <div class="cd-filter-block">
                      <h4>Select</h4>

                      <div class="cd-filter-content">
                        <div class="cd-select cd-filters">
                          <select class="filter" name="selectThis" id="selectThis">
                            <option value="">Choose an Syllabus</option>
                            <option value=".option1">CBSE</option>
                            <option value=".option2">STATE BOARD</option>
                            <option value=".option3">ICSE</option>
                            <option value=".option4">IB</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div class="cd-filter-block">
                      <h4>Type of School</h4>

                      <ul class="cd-filter-content cd-filters list">
                        <li>
                          <input class="filter" data-filter="" type="radio" name="radioButton" id="radio1" checked/>
                          <label class="radio-label" for="radio1">Army</label>
                        </li>

                        <li>
                          <input class="filter" data-filter=".radio2" type="radio" name="radioButton" id="radio2"/>
                          <label class="radio-label" for="radio2">KV</label>
                        </li>

                        <li>
                          <input class="filter" data-filter=".radio3" type="radio" name="radioButton" id="radio3"/>
                          <label class="radio-label" for="radio3">International</label>
                        </li>
                      </ul>
                    </div>
                  </form>

                  <a href="#0" class="cd-close">Close</a>
                </div>

                <a href="#0" class="cd-filter-trigger">Filters</a>
              </main>
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

    }
}

export default connect(

)(Listing)
