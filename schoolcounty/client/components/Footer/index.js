
import React, { Component } from 'react'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../constants/filters'
import classnames from 'classnames'
import style from './style.css'
import Footerlinks from './Footerlinks/index'

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

                <Footerlinks/>

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
