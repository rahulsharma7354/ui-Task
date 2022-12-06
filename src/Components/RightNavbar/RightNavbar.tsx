import React, { Component } from 'react'
import './RightNavbar.scss'
import { Icon } from '@iconify/react';
export default class Cards extends Component {
  render() {
    return (
      <div className='cards-container'>
        <h4 className='cards-heading mt-3 ms-4'>Your Cards</h4>
        <p className='add-cards  mt-2 ms-4'>Add and Manage Cards here</p>
        {/* <img className='cards' src={Card} alt=""/> */}
        <div className="cards-container-section ms-3">
          <div className='carinsurance'>
          <p className='main-insurance-heading ms-3 mb-0 mt-4 mb-1'>Car Insurance</p>
          <p className='insurance-number ms-3 mb-4'>43782674567</p>
          <Icon className='insurance-dollar mt-1 ms-3' icon="fontisto:dollar" width={35} height={27}/>
          <span className='insurance-amount ms-1  '>2347.08</span>
          <span className='insurance-date  ps-5 mt-2 pt-1'>06/22</span>
          </div>
          <div className='healthcard-first'>
          <p className='main-insurance-heading ms-3 mb-0 mt-4 mb-1'>Health Insurance</p>
          <p className='insurance-number ms-3 mb-4'>43782674567</p>
          <Icon className='insurance-dollar mt-1 ms-3' icon="fontisto:dollar" width={35} height={27}/>
          <span className='insurance-amount ms-1  '>2347.08</span>
          <span className='insurance-date  ps-5 mt-2 pt-1'>06/22</span>
          </div>
          <div className='healthcard-second'>
          <p className='main-insurance-heading ms-3 mb-0 mt-4 mb-1'>Health Insurance</p>
          <p className='insurance-number ms-3 mb-4'>43782674567</p>
          <Icon className='insurance-dollar mt-1 ms-3' icon="fontisto:dollar" width={35} height={27}/>
          <span className='insurance-amount ms-1  '>2347.08</span>
          <span className='insurance-date  ps-5 mt-2 pt-1'>06/22</span>
          </div>
        </div>
        <button className='add-card-button mt-2 ms-4 ps-1'>Add Card+</button>
        <a className='know-more-link mt-2' href="">Know More</a>
      </div>
    )
  }
}
