import React, { Component } from 'react'
import './RightNavbar.scss'
export default class Cards extends Component {
  render() {
    return (
      <div className='cards-container'>
        <h4 className='cards-heading mt-3 ms-4'>Your Cards</h4>
        <p className='add-cards  mt-2 ms-4'>Add and Manage Cards here</p>
        {/* <img className='cards' src={Card} alt=""/> */}
        <div className="cards-container-section ms-3">
          <img className='carinsurance' src="./Assets/Car-insurance.png" alt="" />
          <img className='healthcard-first' src="./Assets/Health-1.png" alt="" />
          <img className='healthcard-second' src="./Assets/Health-2.png" alt="" />
        </div>
        <button className='add-card-button mt-2 ms-4 ps-1'>Add Card+</button>
        <a className='know-more-link mt-2' href="">Know More</a>
      </div>
    )
  }
}
