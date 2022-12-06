import React, { Component } from 'react'
import { Icon } from '@iconify/react';
import './Header.scss'
export default class Header extends Component {
  render() {
    return (
      <>
        <div className="first-header-container">
          <div className="title">
            <img src="./Assets/Title.png" alt="title" width={77} />
            <span className='title-heading mt-3'>TITLE</span>
          </div>
          <div className="settings ps-5 ms-5 ">
            <Icon className='notification-bell ms-5 mt-3 me-2' icon="mingcute:notification-fill" width={21} />
            <Icon className='setting-icon mt-3 ms-3 me-3 ' icon="material-symbols:settings" width={21} />
            <span className="person-profile mt-2 pt-1">
              <div className="profile-name m-2 px-3 pe-4 me-3">
                <p className='john'>John Samuel</p>
              </div>
              <div className="profileIcon ">
              </div>
            </span>
          </div>
        </div>

      </>
    )
  }
}
