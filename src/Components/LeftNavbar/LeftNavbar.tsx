import React, { Component } from 'react';
import './LeftNavbar.scss'
import { Icon } from '@iconify/react';
import {Board28Filled} from "@fluentui/react-icons";
export default class DashBoardSection extends Component {
  render() {
    return (
        <div className="display-container px-3 d-flex flex-column ">
          <div  className=' p-2 active-link'>
          <Board28Filled id='active-icon' className='mb-2 mt-4 pt-1 mx-0'/>
          <span className='active-icon-text  mt-2 pt-4 px-3 '> Dashboard</span>
          </div>
          <div className='p-2 dashboard-container'>
          <Icon className='dashboard-icon  mt-1' icon="material-symbols:payments-sharp" width="21" height="21"  hFlip={true} />
          <span className='icon-text px-4 mt-1  mx-3 px-4 mx-3'> Payments</span>
          </div>
          <div className=' p-2 dashboard-container'>
          <Icon className='dashboard-icon mt-1' icon="ri:book-fill"  width="21" height="20"/>
          <span className='icon-text px-4 mt-1  mx-3'>My Policy</span>
          </div>
          <div className=' p-2 dashboard-container'>
            <img className='dashboard-icon mt-1' src="./Assets/mobile.png" alt="" width={21} height={21}/>
          <span className='icon-text px-4 mt-1  mx-3'>My Claim</span>
          </div>
          <div className=' p-2 dashboard-container'>
          <Icon className='dashboard-icon mt-1' icon="bi:credit-card-fill" width="18" height="21"  hFlip={true} />
          <span className='icon-text px-4 mt-1  mx-3'>Manage Cards</span>
          </div>
          <div className=' p-2 dashboard-container'>
          <Icon className='dashboard-icon mt-1' icon="fluent:handshake-24-filled" width="21" height="21"  hFlip={true} />
          <span className='icon-text px-4 mt-1  mx-3'>Settings</span>
          </div>
          <div className=' p-2 dashboard-container'>
          <Icon className='dashboard-icon mt-1' icon="fluent:handshake-24-filled" width="21" height="21"  hFlip={true} />
          <span className='icon-text px-4 mt-1  mx-3'>Support</span>
          </div>
          <div className='dashboard-bottom-section mt-5 pt-5'>
            <h4 className='topup-heading'>Top Up</h4>
            <p className='top-up-content mb-2'>Add money to your wallet</p>
          </div>
          <div className='add-money'>
            <img className='option mx-3 mt-2 pt-1' src="./Assets/dots.png" alt="" width={9} />
            <h5 className='current-balance-heading mt-3 px-3'>Current Balance</h5>
            <div className='balance-container'>
            <Icon className='dollar mt-1 mx-1 px-1' icon="twemoji:heavy-dollar-sign" width={35} height={27}/>
             <span className='balance mx-4 px-3'>1098.78</span>
            </div>
            <button className='add-money-button mx-3'>Add Money+</button>
          </div>
        </div>
    )
  }
}