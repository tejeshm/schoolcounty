
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import GoogleMapReact from 'google-map-react';
import * as TodoActions from '../../actions/todos'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Listing extends Component {
  render() {
    const { todos, actions, children } = this.props
    return (
        <div>
        <Header />
        <main class="cd-main-content" style={{top: '50px'}}>



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
                    <input type="checkbox" id="remember-me" checked/>
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
                    <input class="full-width has-padding has-border" id="reset-email" type="email" placeholder="E-mail"/>
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
              <li class="mix color-3 check1 radio2 option3">
                <div class="row">
                  <div class="col-xs-7 col-sm-5 col-md-7 col-lg-6 clearfix school-info">
                    <div class=" fl js-schoolPhoto">
                      <img src="./../assets/img/product.jpg" alt="No school photo available" class="thumbnail-border"/>
                    </div>
                    <div class="fl pll">
                      <div class="ptm notranslate">
                        <div class="mtm "></div>
                        <div><a style={{lineHeight: '1.1em'}} class="open-sans_sb mbs font-size-medium rs-schoolName" href="detail.html">Wisdom School


                        </a></div>
                        <div class=" font-size-small rs-schoolAddress">Rajaji Nagar, bangalore-11</div>
                        <div class="clearfix visible-xs font-size-small">
                          <div class="prs fl ">Public district</div>
                          <div class="fl">9-12,http://www.wisdom.in</div>
                        </div>
                      </div>
                      <div class="font-size-small mvm clearfix ptm ">
                        <div class="fl">
                          <span class="prm vam"><span class="iconx16-stars i-16-orange-star i-16-star-2"></span><span class="iconx16-stars i-16-grey-star i-16-star-3"></span></span>
                          <a class="font-size-small js-reviewCount" href="/missouri/moberly/1249-Moberly-Sr.-High-School/#Reviews">16 reviews</a>
                        </div>
                        <div class="phm fl">|</div>
                        <div class="prs fl">Public district</div>
                        <div class="fl">9-12</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-5 col-sm-4 col-md-3 col-lg-4 icons">
                    <div class="ptl "></div>
                    <div class="row">

                      
                      <div class="col-xs-6 col-sm-4 mvl tac">
                        <a href="/missouri/moberly/1249-Moberly-Sr.-High-School/">

  <span class="gs-rating circle-rating--5 circle-rating--xtra-small ma">
    5
  </span>

                          <div class="pts"></div>
                          <span class="tac font-size-xs db link-darkgray" style={{lineheight: '1.3em'}}>SchoolCounty<br/>Rating</span>
                        </a>            </div>
                      
                      <div class="col-xs-6 col-sm-4 mtl mbs js-schoolFitScore">
                      </div>
                    </div>
                  </div>
                  
                  
                  <div class=" col-sm-3 col-md-2 tar pvl">
                    <div class="clearfix">
                      <div class="btn btn-default full-width clearfix mbm db fl js-compareSchoolButton" id="js-compareSchool1249" data-schoolname="Moberly Sr. High School" data-schoolstate="mo" data-schoolid="1249" data-schoolrating="5"
                           style={{cursor: 'pointer', backgroundColor: '#9dc997',padding: '.6em 2em'}}>
                        <input type="checkbox" unchecked style={{    margin: '2px !important',    float: 'left'}}/>
                          <div class="fl js-compareSchoolsButtonText"><a href="compare.html" data-toggle="tooltip" title="Compare">Compare</a></div>
                      </div>
                    </div>
                  </div>
                </div>

              </li>
              <li class="mix color-2 check2 radio1 option2">
                <div class="row">
                  <div class="col-xs-7 col-sm-5 col-md-7 col-lg-6 clearfix school-info">
                    <div class="  fl js-schoolPhoto">
                      <img src="./../assets/img/product.jpg" alt="No school photo available" class="thumbnail-border"/>
                    </div>
                    <div class="fl pll">
                      <div class="ptm notranslate">
                        <div class="mtm "></div>
                        <div><a style={{lineHeight: '1.1em'}} class="open-sans_sb mbs font-size-medium rs-schoolName" href="detail.html">DPS Bangalore South
                        </a></div>
                        <div class=" font-size-small rs-schoolAddress">kanakapura Road, bangalore-21</div>
                        <div class="clearfix visible-xs font-size-small">
                          <div class="prs fl ">Public district</div>
                          <div class="fl">3-5,http://www.dpsbangalore.com</div>
                        </div>
                      </div>
                      <div class="font-size-small mvm clearfix ptm ">
                        <div class="fl">
                          <span class="prm vam"><span class="iconx16-stars i-16-orange-star i-16-star-4"></span><span class="iconx16-stars i-16-grey-star i-16-star-1"></span></span>
                          <a class="font-size-small js-reviewCount" href="/missouri/moberly/2992-Gratz-Brown-Elementary-School/#Reviews">25 reviews</a>
                        </div>
                        <div class="phm fl">|</div>
                        <div class="prs fl">Public district</div>
                        <div class="fl">3-5</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-5 col-sm-4 col-md-3 col-lg-4 icons">
                    <div class="ptl "></div>
                    <div class="row">

                      
                      <div class="col-xs-6 col-sm-4 mvl tac">
                        <a href="/missouri/moberly/2992-Gratz-Brown-Elementary-School/">

  <span class="gs-rating circle-rating--5 circle-rating--xtra-small ma">
    5
  </span>

                          <div class="pts"></div>
                          <span class="tac font-size-xs db link-darkgray" style={{lineHeight: '1.3em'}}>SchoolCounty<br/>Rating</span>
                        </a>            </div>
                      
                      <div class="col-xs-6 col-sm-4 mtl mbs js-schoolFitScore">
                      </div>
                    </div>
                  </div>
                  
                  
                  <div class=" col-sm-3 col-md-2 tar pvl">
                    <div class="clearfix">
                      <div class="btn btn-default full-width clearfix mbm db fl js-compareSchoolButton" id="js-compareSchool2992" data-schoolname="Gratz Brown Elementary School" data-schoolstate="mo" data-schoolid="2992" data-schoolrating="5"
                           style={{cursor: 'pointer', backgroundColor: '#9dc997', padding: '.6em 2em'}}>
                        <input type="checkbox" unchecked style={{ margin: '2px !important', float: 'left'}}/>
                          <div class="fl js-compareSchoolsButtonText"><a href="compare.html" data-toggle="tooltip" title="Compare">Compare</a></div>
                      </div>

                    </div>
                  </div>
                </div>
              </li>
              <li class="mix color-1 check3 radio3 option1">
                <div class="row">
                  <div class="col-xs-7 col-sm-5 col-md-7 col-lg-6 clearfix school-info">
                    <div class="  fl js-schoolPhoto">
                      <img src="./../assets/img/product.jpg" alt="No school photo available" class="thumbnail-border"/>
                    </div>
                    <div class="fl pll">
                      <div class="ptm notranslate">
                        <div class="mtm "></div>
                        <div><a style={{lineHeight: '1.1em'}} class="open-sans_sb mbs font-size-medium rs-schoolName" href="detail.html">Timpany School


                        </a></div>
                        <div class=" font-size-small rs-schoolAddress">Marathali , bangalore-16</div>
                        <div class="clearfix visible-xs font-size-small">
                          <div class="prs fl ">Private</div>
                          <div class="fl">PK-8,http://www.timpanyschool.in</div>
                        </div>
                      </div>
                      <div class="font-size-small mvm clearfix ptm ">
                        <div class="fl">
                          <em class="js-reviewCount">No reviews: </em>
                          <a class="font-size-small" href="/missouri/moberly/2504-St-Pius-X-Catholic-School/#Reviews">Be the first to review</a>
                        </div>
                        <div class="phm fl">|</div>
                        <div class="prs fl">Private</div>
                        <div class="fl">PK-8</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-5 col-sm-4 col-md-3 col-lg-4 icons">
                    <div class="ptl "></div>
                    <div class="row">

                      
                      <div class="col-xs-6 col-sm-4 mvl tac">
                      </div>
                      
                      <div class="col-xs-6 col-sm-4 mtl mbs js-schoolFitScore">
                      </div>
                    </div>
                  </div>
                  
                  
                  <div class=" col-sm-3 col-md-2 tar pvl">
                    <div class="clearfix">
                      <div class="btn btn-default full-width clearfix mbm db fl js-compareSchoolButton" id="js-compareSchool2504" data-schoolname="St Pius X Catholic School" data-schoolstate="mo" data-schoolid="2504" data-schoolrating="nr" style={{cursor: 'pointer', backgroundColor:' #9dc997', padding: '.6em 2em'}}>
                        <input type="checkbox" unchecked style={{    margin: '2px !important',    float: 'left'}}/>
                          <input type="checkbox" unchecked style={{    margin: '2px !important',    float: 'left'}}/>
                            <div class="fl js-compareSchoolsButtonText"><a href="compare.html" data-toggle="tooltip" title="Compare">Compare</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="mix color-3 check3 radio2 option4">
                <div class="row">
                  <div class="col-xs-7 col-sm-5 col-md-7 col-lg-6 clearfix school-info">
                    <div class="  fl js-schoolPhoto">
                      <img src="./../assets/img/product.jpg" alt="No school photo available" class="thumbnail-border"/>
                    </div>
                    <div class="fl pll">
                      <div class="ptm notranslate">
                        <div class="mtm "></div>
                        <div><a style={{lineHeight: '1.1em'}} class="open-sans_sb mbs font-size-medium rs-schoolName" href="detail.html">Maranatha Adventist School</a></div>
                        <div class=" font-size-small rs-schoolAddress">Banashankri , bangalore-4</div>
                        <div class="clearfix visible-xs font-size-small">
                          <div class="prs fl ">Private</div>
                          <div class="fl">K-8,http://www.maranathaschool.in</div>
                        </div>
                      </div>
                      <div class="font-size-small mvm clearfix ptm ">
                        <div class="fl">
                          <span class="prm vam"><span class="iconx16-stars i-16-orange-star i-16-star-5"></span><span class="iconx16-stars i-16-grey-star i-16-star-0"></span></span>
                          <a class="font-size-small js-reviewCount" href="/missouri/moberly/2849-Maranatha-Adventist-School/#Reviews">2 reviews</a>
                        </div>
                        <div class="phm fl">|</div>
                        <div class="prs fl">Private</div>
                        <div class="fl">K-8</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-5 col-sm-4 col-md-3 col-lg-4 icons">
                    <div class="ptl "></div>
                    <div class="row">

                      
                      <div class="col-xs-6 col-sm-4 mvl tac">
                      </div>
                      
                      <div class="col-xs-6 col-sm-4 mtl mbs js-schoolFitScore">
                      </div>
                    </div>
                  </div>
                  
                  
                  <div class=" col-sm-3 col-md-2 tar pvl">
                    <div class="clearfix">
                      <div class="btn btn-default full-width clearfix mbm db fl js-compareSchoolButton" id="js-compareSchool2849" data-schoolname="Maranatha Adventist School" data-schoolstate="mo" data-schoolid="2849" data-schoolrating="nr" style={{cursor: 'pointer', backgroundColor:' #9dc997', padding: '.6em 2em'}}>
                        <input type="checkbox" unchecked style={{    margin:  '2px !important',    float: 'left'}}/>
                          <div class="fl js-compareSchoolsButtonText"><a href="compare.html" data-toggle="tooltip" title="Compare">Compare</a></div>
                      </div>

                    </div>
                  </div>
                </div>
              </li>
              <li class="mix color-1 check1 radio1 option2">
                <div class="row">
                  <div class="col-xs-7 col-sm-5 col-md-7 col-lg-6 clearfix school-info">
                    <div class=" fl js-schoolPhoto">
                      <img src="./../assets/img/product.jpg" alt="No school photo available" class="thumbnail-border"/>
                    </div>
                    <div class="fl pll">
                      <div class="ptm notranslate">
                        <div class="mtm "></div>
                        <div><a style={{lineHeight: '1.1em'}} class="open-sans_sb mbs font-size-medium rs-schoolName" href="detail.html">Moberly Sr. High School</a></div>
                        <div class=" font-size-small rs-schoolAddress">J.P Nagar , bangalore-6</div>
                        <div class="clearfix visible-xs font-size-small">
                          <div class="prs fl ">Public district</div>
                          <div class="fl">9-12,http://www.moberlyschool.in</div>
                        </div>
                      </div>
                      <div class="font-size-small mvm clearfix ptm ">
                        <div class="fl">
                          <span class="prm vam"><span class="iconx16-stars i-16-orange-star i-16-star-2"></span><span class="iconx16-stars i-16-grey-star i-16-star-3"></span></span>
                          <a class="font-size-small js-reviewCount" href="/missouri/moberly/1249-Moberly-Sr.-High-School/#Reviews">16 reviews</a>
                        </div>
                        <div class="phm fl">|</div>
                        <div class="prs fl">Public district</div>
                        <div class="fl">9-12</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-5 col-sm-4 col-md-3 col-lg-4 icons">
                    <div class="ptl "></div>
                    <div class="row">

                      
                      <div class="col-xs-6 col-sm-4 mvl tac">
                        <a href="/missouri/moberly/1249-Moberly-Sr.-High-School/">

  <span class="gs-rating circle-rating--5 circle-rating--xtra-small ma">
    5
  </span>

                          <div class="pts"></div>
                          <span class="tac font-size-xs db link-darkgray" style={{lineHeight: '1.3em'}}>SchoolCounty<br/>Rating</span>
                        </a>            </div>
                      
                      <div class="col-xs-6 col-sm-4 mtl mbs js-schoolFitScore">
                      </div>
                    </div>
                  </div>
                  
                  
                  <div class=" col-sm-3 col-md-2 tar pvl">
                    <div class="clearfix">
                      <div class="btn btn-default full-width clearfix mbm db fl js-compareSchoolButton" id="js-compareSchool1249" data-schoolname="Moberly Sr. High School" data-schoolstate="mo" data-schoolid="1249" data-schoolrating="5" style={{cursor: 'pointer', backgroundColor:' #9dc997', padding: '.6em 2em'}}>
                        <input type="checkbox" unchecked style={{    margin:  '2px !important',    float: 'left'}}/>
                          <div class="fl js-compareSchoolsButtonText"><a href="compare.html" data-toggle="tooltip" title="Compare">Compare</a></div>
                      </div>

                    </div>
                  </div>
                </div>


              </li>
              <li class="mix color-2 check2 radio3 option3"><div class="row">
                <div class="col-xs-7 col-sm-5 col-md-7 col-lg-6 clearfix school-info">
                  <div class=" fl js-schoolPhoto">
                    <img src="./../assets/img/product.jpg" alt="No school photo available" class="thumbnail-border"/>
                  </div>
                  <div class="fl pll">
                    <div class="ptm notranslate">
                      <div class="mtm "></div>
                      <div><a style={{lineHeight: '1.1em'}} class="open-sans_sb mbs font-size-medium rs-schoolName" href="detail.html">St Anthony's Boys School</a></div>
                      <div class=" font-size-small rs-schoolAddress"> Fraser Town, Bangalore-21</div>
                      <div class="clearfix visible-xs font-size-small">
                        <div class="prs fl ">Public district</div>
                        <div class="fl">9-12,http://stanthonyschool.edu</div>
                      </div>
                    </div>
                    <div class="font-size-small mvm clearfix ptm ">
                      <div class="fl">
                        <span class="prm vam"><span class="iconx16-stars i-16-orange-star i-16-star-2"></span><span class="iconx16-stars i-16-grey-star i-16-star-3"></span></span>
                        <a class="font-size-small js-reviewCount" href="/missouri/moberly/1249-Moberly-Sr.-High-School/#Reviews">16 reviews</a>
                      </div>
                      <div class="phm fl">|</div>
                      <div class="prs fl">Public district</div>
                      <div class="fl">9-12</div>
                    </div>
                  </div>
                </div>
                <div class="col-xs-5 col-sm-4 col-md-3 col-lg-4 icons">
                  <div class="ptl "></div>
                  <div class="row">

                    
                    <div class="col-xs-6 col-sm-4 mvl tac">
                      <a href="/missouri/moberly/1249-Moberly-Sr.-High-School/">

  <span class="gs-rating circle-rating--5 circle-rating--xtra-small ma">
    5
  </span>

                        <div class="pts"></div>
                        <span class="tac font-size-xs db link-darkgray" style={{lineHeight: '1.3em'}}>SchoolCounty<br/>Rating</span>
                      </a>            </div>
                    
                    <div class="col-xs-6 col-sm-4 mtl mbs js-schoolFitScore">
                    </div>
                  </div>
                </div>
                
                
                <div class=" col-sm-3 col-md-2 tar pvl">
                  <div class="clearfix">
                    <div class="btn btn-default full-width clearfix mbm db fl js-compareSchoolButton" id="js-compareSchool1249" data-schoolname="Moberly Sr. High School" data-schoolstate="mo" data-schoolid="1249" data-schoolrating="5" style={{cursor: 'pointer', backgroundColor:' #9dc997', padding: '.6em 2em'}}>
                      <input type="checkbox" unchecked style={{    margin:  '2px !important',    float: 'left'}}/>
                        <div class="fl js-compareSchoolsButtonText"><a href="compare.html" data-toggle="tooltip" title="Compare">Compare</a></div>
                    </div>

                  </div>
                </div>
              </div>

              </li>
              <li class="mix color-3 check2 radio2 option1">
                <div class="row">
                  <div class="col-xs-7 col-sm-5 col-md-7 col-lg-6 clearfix school-info">
                    <div class=" fl js-schoolPhoto">
                      <img src="./../assets/img/product.jpg" alt="No school photo available" class="thumbnail-border"/>
                    </div>
                    <div class="fl pll">
                      <div class="ptm notranslate">
                        <div class="mtm "></div>
                        <div><a style={{lineHeight: '1.1em'}} class="open-sans_sb mbs font-size-medium rs-schoolName" href="detail.html">VIBGYOR High School</a></div>
                        <div class=" font-size-small rs-schoolAddress"> Bannerghatta Rd, Moberly, Bangalore-18</div>
                        <div class="clearfix visible-xs font-size-small">
                          <div class="prs fl ">Public district</div>
                          <div class="fl">9-12,http://vibgyorbangalore.edu</div>
                        </div>
                      </div>
                      <div class="font-size-small mvm clearfix ptm ">
                        <div class="fl">
                          <span class="prm vam"><span class="iconx16-stars i-16-orange-star i-16-star-2"></span><span class="iconx16-stars i-16-grey-star i-16-star-3"></span></span>
                          <a class="font-size-small js-reviewCount" href="/missouri/moberly/1249-Moberly-Sr.-High-School/#Reviews">16 reviews</a>
                        </div>
                        <div class="phm fl">|</div>
                        <div class="prs fl">Public district</div>
                        <div class="fl">9-12</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-5 col-sm-4 col-md-3 col-lg-4 icons">
                    <div class="ptl "></div>
                    <div class="row">

                      
                      <div class="col-xs-6 col-sm-4 mvl tac">
                        <a href="/missouri/moberly/1249-Moberly-Sr.-High-School/">

  <span class="gs-rating circle-rating--5 circle-rating--xtra-small ma">
    5
  </span>

                          <div class="pts"></div>
                          <span class="tac font-size-xs db link-darkgray" style={{lineHeight: '1.3em'}}>SchoolCounty<br/>Rating</span>
                        </a>            </div>
                      
                      <div class="col-xs-6 col-sm-4 mtl mbs js-schoolFitScore">
                      </div>
                    </div>
                  </div>
                  
                  
                  <div class=" col-sm-3 col-md-2 tar pvl">
                    <div class="clearfix">
                      <div class="btn btn-default full-width clearfix mbm db fl js-compareSchoolButton" id="js-compareSchool1249" data-schoolname="Moberly Sr. High School" data-schoolstate="mo" data-schoolid="1249" data-schoolrating="5" style={{cursor: 'pointer', backgroundColor:' #9dc997', padding: '.6em 2em'}}>
                        <input type="checkbox" unchecked style={{    margin:  '2px !important',    float: 'left'}}/>
                          <div class="fl js-compareSchoolsButtonText"><a href="compare.html" data-toggle="tooltip" title="Compare">Compare</a></div>
                      </div>

                    </div>
                  </div>
                </div>


              </li>
              <li class="mix color-1 check1 radio3 option4">
                <div class="row">
                  <div class="col-xs-7 col-sm-5 col-md-7 col-lg-6 clearfix school-info">
                    <div class="  fl js-schoolPhoto">
                      <img src="./../assets/img/product.jpg" alt="No school photo available" class="thumbnail-border"/>
                    </div>
                    <div class="fl pll">
                      <div class="ptm notranslate">
                        <div class="mtm "></div>
                        <div><a style={{lineHeight: '1.1em'}} class="open-sans_sb mbs font-size-medium rs-schoolName" href="detail.html">Greenwood High International School,</a></div>
                        <div class=" font-size-small rs-schoolAddress"> Varthur Sarjapur Road, Bangalore-6</div>
                        <div class="clearfix visible-xs font-size-small">
                          <div class="prs fl ">Private</div>
                          <div class="fl">K-8,http://greenwoodschool.in</div>
                        </div>
                      </div>
                      <div class="font-size-small mvm clearfix ptm ">
                        <div class="fl">
                          <span class="prm vam"><span class="iconx16-stars i-16-orange-star i-16-star-5"></span><span class="iconx16-stars i-16-grey-star i-16-star-0"></span></span>
                          <a class="font-size-small js-reviewCount" href="/missouri/moberly/2849-Maranatha-Adventist-School/#Reviews">2 reviews</a>
                        </div>
                        <div class="phm fl">|</div>
                        <div class="prs fl">Private</div>
                        <div class="fl">K-8</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-5 col-sm-4 col-md-3 col-lg-4 icons">
                    <div class="ptl "></div>
                    <div class="row">

                      
                      <div class="col-xs-6 col-sm-4 mvl tac">
                      </div>
                      
                      <div class="col-xs-6 col-sm-4 mtl mbs js-schoolFitScore">
                      </div>
                    </div>
                  </div>
                  
                  
                  <div class=" col-sm-3 col-md-2 tar pvl">
                    <div class="clearfix">
                      <div class="btn btn-default full-width clearfix mbm db fl js-compareSchoolButton" id="js-compareSchool2849" data-schoolname="Maranatha Adventist School" data-schoolstate="mo" data-schoolid="2849" data-schoolrating="nr" style={{cursor: 'pointer', backgroundColor:' #9dc997', padding: '.6em 2em'}}>
                        <input type="checkbox" unchecked style={{    margin:  '2px !important',    float: 'left'}}/>
                          <div class="fl js-compareSchoolsButtonText"><a href="compare.html" data-toggle="tooltip" title="Compare">Compare</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="mix color-2 check1 radio1 option3">
                <div class="row">
                  <div class="col-xs-7 col-sm-5 col-md-7 col-lg-6 clearfix school-info">
                    <div class="  fl js-schoolPhoto">
                      <img src="./../assets/img/product.jpg" alt="No school photo available" class="thumbnail-border"/>
                    </div>
                    <div class="fl pll">
                      <div class="ptm notranslate">
                        <div class="mtm "></div>
                        <div><a style={{lineHeight: '1.1em'}} class="open-sans_sb mbs font-size-medium rs-schoolName" href="detail.html">Cluny Convent High School</a></div>
                        <div class=" font-size-small rs-schoolAddress"> Malleswaram, Bangalore-8</div>
                        <div class="clearfix visible-xs font-size-small">
                          <div class="prs fl ">Private</div>
                          <div class="fl">K-8,Http://clunyconventschool.in</div>
                        </div>
                      </div>
                      <div class="font-size-small mvm clearfix ptm ">
                        <div class="fl">
                          <span class="prm vam"><span class="iconx16-stars i-16-orange-star i-16-star-5"></span><span class="iconx16-stars i-16-grey-star i-16-star-0"></span></span>
                          <a class="font-size-small js-reviewCount" href="/missouri/moberly/2849-Maranatha-Adventist-School/#Reviews">2 reviews</a>
                        </div>
                        <div class="phm fl">|</div>
                        <div class="prs fl">Private</div>
                        <div class="fl">K-8</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-5 col-sm-4 col-md-3 col-lg-4 icons">
                    <div class="ptl "></div>
                    <div class="row">

                      
                      <div class="col-xs-6 col-sm-4 mvl tac">
                      </div>
                      
                      <div class="col-xs-6 col-sm-4 mtl mbs js-schoolFitScore">
                      </div>
                    </div>
                  </div>
                  
                  
                  <div class=" col-sm-3 col-md-2 tar pvl">
                    <div class="clearfix">
                      <div class="btn btn-default full-width clearfix mbm db fl js-compareSchoolButton" id="js-compareSchool2849" data-schoolname="Maranatha Adventist School" data-schoolstate="mo" data-schoolid="2849" data-schoolrating="nr" style={{cursor: 'pointer', backgroundColor:' #9dc997', padding: '.6em 2em'}}>
                        <input type="checkbox" unchecked style={{    margin:  '2px !important',    float: 'left'}}/>
                          <div class="fl js-compareSchoolsButtonText"><a href="compare.html" data-toggle="tooltip" title="Compare">Compare</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="mix color-3 check3 radio2 option4">
                <div class="row">
                  <div class="col-xs-7 col-sm-5 col-md-7 col-lg-6 clearfix school-info">
                    <div class="  fl js-schoolPhoto">
                      <img src="./../assets/img/product.jpg" alt="No school photo available" class="thumbnail-border"/>
                    </div>
                    <div class="fl pll">
                      <div class="ptm notranslate">
                        <div class="mtm "></div>
                        <div><a style={{lineHeight: '1.1em'}} class="open-sans_sb mbs font-size-medium rs-schoolName" href="detail.html">Carmel High School</a></div>
                        <div class=" font-size-small rs-schoolAddress"> Basaveshwaranagar, Bangalore-5</div>
                        <div class="clearfix visible-xs font-size-small">
                          <div class="prs fl ">Private</div>
                          <div class="fl">K-8,http://carmelschool.edu</div>
                        </div>
                      </div>
                      <div class="font-size-small mvm clearfix ptm ">
                        <div class="fl">
                          <span class="prm vam"><span class="iconx16-stars i-16-orange-star i-16-star-5"></span><span class="iconx16-stars i-16-grey-star i-16-star-0"></span></span>
                          <a class="font-size-small js-reviewCount" href="/missouri/moberly/2849-Maranatha-Adventist-School/#Reviews">2 reviews</a>
                        </div>
                        <div class="phm fl">|</div>
                        <div class="prs fl">Private</div>
                        <div class="fl">K-8</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-5 col-sm-4 col-md-3 col-lg-4 icons">
                    <div class="ptl "></div>
                    <div class="row">

                      
                      <div class="col-xs-6 col-sm-4 mvl tac">
                      </div>
                      
                      <div class="col-xs-6 col-sm-4 mtl mbs js-schoolFitScore">
                      </div>
                    </div>
                  </div>
                  
                  
                  <div class=" col-sm-3 col-md-2 tar pvl">
                    <div class="clearfix">
                      <div class="btn btn-default full-width clearfix mbm db fl js-compareSchoolButton" id="js-compareSchool2849" data-schoolname="Maranatha Adventist School" data-schoolstate="mo" data-schoolid="2849" data-schoolrating="nr" style={{cursor: 'pointer', backgroundColor:' #9dc997', padding: '.6em 2em'}}>
                        <input type="checkbox" unchecked style={{    margin:  '2px !important',    float: 'left'}}/>
                          <div class="fl js-compareSchoolsButtonText"><a href="compare.html" data-toggle="tooltip" title="Compare">Compare</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="mix color-1 check3 radio3 option2">
                <div class="row">
                  <div class="col-xs-7 col-sm-5 col-md-7 col-lg-6 clearfix school-info">
                    <div class="  fl js-schoolPhoto">
                      <img src="./../assets/img/product.jpg" alt="No school photo available" class="thumbnail-border"/>
                    </div>
                    <div class="fl pll">
                      <div class="ptm notranslate">
                        <div class="mtm "></div>
                        <div><a style={{lineHeight: '1.1em'}} class="open-sans_sb mbs font-size-medium rs-schoolName" href="detail.html">Auden High School</a></div>
                        <div class=" font-size-small rs-schoolAddress"> Banashankari,Bangalore-16</div>
                        <div class="clearfix visible-xs font-size-small">
                          <div class="prs fl ">Private</div>
                          <div class="fl">K-8,http://audenhighschool.edu</div>
                        </div>
                      </div>
                      <div class="font-size-small mvm clearfix ptm ">
                        <div class="fl">
                          <span class="prm vam"><span class="iconx16-stars i-16-orange-star i-16-star-5"></span><span class="iconx16-stars i-16-grey-star i-16-star-0"></span></span>
                          <a class="font-size-small js-reviewCount" href="/missouri/moberly/2849-Maranatha-Adventist-School/#Reviews">2 reviews</a>
                        </div>
                        <div class="phm fl">|</div>
                        <div class="prs fl">Private</div>
                        <div class="fl">K-8</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-5 col-sm-4 col-md-3 col-lg-4 icons">
                    <div class="ptl "></div>
                    <div class="row">

                      
                      <div class="col-xs-6 col-sm-4 mvl tac">
                      </div>
                      
                      <div class="col-xs-6 col-sm-4 mtl mbs js-schoolFitScore">
                      </div>
                    </div>
                  </div>
                  
                  
                  <div class=" col-sm-3 col-md-2 tar pvl">
                    <div class="clearfix">
                      <div class="btn btn-default full-width clearfix mbm db fl js-compareSchoolButton" id="js-compareSchool2849" data-schoolname="Maranatha Adventist School" data-schoolstate="mo" data-schoolid="2849" data-schoolrating="nr" style={{cursor: 'pointer', backgroundColor:' #9dc997', padding: '.6em 2em'}}>
                        <input type="checkbox" unchecked style={{    margin:  '2px !important',    float: 'left'}}/>
                          <div class="fl js-compareSchoolsButtonText"><a href="compare.html" data-toggle="tooltip" title="Compare">Compare</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="mix color-2 check1 radio1 option1">
                <div class="row">
                  <div class="col-xs-7 col-sm-5 col-md-7 col-lg-6 clearfix school-info">
                    <div class="  fl js-schoolPhoto">
                      <img src="./../assets/img/product.jpg" alt="No school photo available" class="thumbnail-border"/>
                    </div>
                    <div class="fl pll">
                      <div class="ptm notranslate">
                        <div class="mtm "></div>
                        <div><a style={{lineHeight: '1.1em'}} class="open-sans_sb mbs font-size-medium rs-schoolName" href="detail.html">National Public School</a></div>
                        <div class=" font-size-small rs-schoolAddress"> Koramangala,Bangalore-6</div>
                        <div class="clearfix visible-xs font-size-small">
                          <div class="prs fl ">Private</div>
                          <div class="fl">K-8,http://nationalpublicschoolbangalore.in</div>
                        </div>
                      </div>
                      <div class="font-size-small mvm clearfix ptm ">
                        <div class="fl">
                          <span class="prm vam"><span class="iconx16-stars i-16-orange-star i-16-star-5"></span><span class="iconx16-stars i-16-grey-star i-16-star-0"></span></span>
                          <a class="font-size-small js-reviewCount" href="/missouri/moberly/2849-Maranatha-Adventist-School/#Reviews">2 reviews</a>
                        </div>
                        <div class="phm fl">|</div>
                        <div class="prs fl">Private</div>
                        <div class="fl">K-8</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-5 col-sm-4 col-md-3 col-lg-4 icons">
                    <div class="ptl "></div>
                    <div class="row">

                      
                      <div class="col-xs-6 col-sm-4 mvl tac">
                      </div>
                      
                      <div class="col-xs-6 col-sm-4 mtl mbs js-schoolFitScore">
                      </div>
                    </div>
                  </div>
                  
                  
                  <div class=" col-sm-3 col-md-2 tar pvl">
                    <div class="clearfix">
                      <div class="btn btn-default full-width clearfix mbm db fl js-compareSchoolButton" id="js-compareSchool2849" data-schoolname="Maranatha Adventist School" data-schoolstate="mo" data-schoolid="2849" data-schoolrating="nr" style={{cursor: 'pointer', backgroundColor:' #9dc997', padding: '.6em 2em'}}>
                        <input type="checkbox" unchecked style={{    margin:  '2px !important',    float: 'left'}}/>
                          <div class="fl js-compareSchoolsButtonText"><a href="compare.html" data-toggle="tooltip" title="Compare">Compare</a></div>
                      </div>

                    </div>
                  </div>
                </div>
              </li>
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
)(Listing)
