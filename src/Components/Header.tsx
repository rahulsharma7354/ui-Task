import React, { Component } from 'react'
import { Icon } from '@iconify/react';
import './Header.scss'
import Title from '../Assets/Title.png'
export default class Header extends Component {
  render() {
    return (
      <>
        <div className="first-header-container">
          <div className="title">
            <img src={Title} alt="title" width={77} />
            <span className='title-heading'>TITLE</span>
          </div>
          <div className="settings">
            <Icon className='notification-bell' icon="mingcute:notification-fill" width={21} />
            <Icon className='setting-icon' icon="material-symbols:settings" width={21} />
            <span className="profile">
              <div className="profileName">
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
