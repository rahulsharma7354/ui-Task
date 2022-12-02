import React, { Component } from 'react'
import { Icon } from '@iconify/react';
import Title from './Assets/Title.png'
import setting from './Assets/setting.png';
export default class header extends Component {
  render() {
    return (
      <>
      <div className="container">
        <div className="title">
          <img src={Title} alt="title" width={79} />
          <span className='title-heading'>TITLE</span>
        </div>
        <div className="settings" >
          <Icon className='Notification-bell' icon="mingcute:notification-fill" width={21}/>
          <Icon className='setting-icon' icon="material-symbols:settings" width={21} />
          <img  src={setting} alt="setting" width={200}/>
        </div>
      </div>

      </>
    )
  }
}
