import React, { Component } from 'react'
import Title from './Assets/Title.png'
import setting from './Assets/setting.png';
export default class header extends Component {
  render() {
    return (
      <>
      <div className="container">
        <div className="title">
          <img src={Title} alt="title" width={170} />
        </div>
        <div className="settings" >
          <img  src={setting} alt="setting" width={298}/>
        </div>
      </div>

      </>
    )
  }
}
