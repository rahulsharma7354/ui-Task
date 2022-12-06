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
            <span className='title-heading'>TITLE</span>
          </div>
          <div className="settings">
            <Icon className='notification-bell' icon="mingcute:notification-fill" width={21} />
            <Icon className='setting-icon' icon="material-symbols:settings" width={21} />
            <span className="person-profile">
              <div className="profile-name">
                <p className='john'>John Samuel</p>
              </div>
              <div className="profileIcon">
              </div>
            </span>
          </div>
        </div>

      </>
    )
  }
}
