import React, { Component } from 'react';
import Mobile from '../Assets/mobile.png';
import option from '../Assets/dots.png'
import Dashboard from '../Assets/dashboard.png'
import './LeftNavbar.scss'
import { Icon } from '@iconify/react';
export default class DashBoardSection extends Component {
  render() {
    return (
        <div className="display-container">
          <div className='active-link'>
           <img className='active-icon' src={Dashboard} alt="" />
          <span className='active-icon-text'> Dashboard</span>
          </div>
          <div className='dashboard-container'>
          <Icon className='dashboard-icon' icon="material-symbols:payments-sharp" width="21" height="21"  hFlip={true} />
          <span className='icon-text'> Payments</span>
          </div>
          <div className='dashboard-container'>
          <Icon className='dashboard-icon' icon="ri:book-fill"  width="21" height="20"/>
          <span className='icon-text'>My Policy</span>
          </div>
          <div className='dashboard-container'>
            <img className='dashboard-icon' src={Mobile} alt="" width={21} height={21}/>
          <span className='icon-text'>My Claim</span>
          </div>
          <div className='dashboard-container'>
          <Icon className='dashboard-icon' icon="bi:credit-card-fill" width="18" height="21"  hFlip={true} />
          <span className='icon-text'>Manage Cards</span>
          </div>
          <div className='dashboard-container'>
          <Icon className='dashboard-icon' icon="fluent:handshake-24-filled" width="21" height="21"  hFlip={true} />
          <span className='icon-text'>Settings</span>
          </div>
          <div className='dashboard-container'>
          <Icon className='dashboard-icon' icon="fluent:handshake-24-filled" width="21" height="21"  hFlip={true} />
          <span className='icon-text'>Support</span>
          </div>
          <div className='dashboard-bottom-section'>
            <h4 className='topup-heading'>Top Up</h4>
            <p className='top-up-content'>Add money to your wallet</p>
          </div>
          <div className='add-money'>
            <img className='option' src={option} alt="" width={9} />
            <h5 className='current-balance-heading'>Current Balance</h5>
            <div className='balance-container'>
            <Icon className='dollar' icon="twemoji:heavy-dollar-sign" width={35} height={27}/>
             <span className='balance'>1098.78</span>
            </div>
            <button className='add-money-button'>Add Money+</button>
          </div>
        </div>
    )
  }
}