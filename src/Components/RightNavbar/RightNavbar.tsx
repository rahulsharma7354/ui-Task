import React, { Component } from 'react'
import './RightNavbar.scss'
export default class Cards extends Component {
  render() {
    return (
      <div className='cards-container'>
        <h4 className='cards-heading'>Your Cards</h4>
        <p className='add-cards'>Add and Manage Cards here</p>
        {/* <img className='cards' src={Card} alt=""/> */}
        <div className="cards-container-section">
          <img className='carinsurance' src="./Assets/Car-insurance.png" alt="" />
          <img className='healthcard-first' src="./Assets/Health-1.png" alt="" />
          <img className='healthcard-second' src="./Assets/Health-2.png" alt="" />
        </div>
        <button className='add-card-button'>Add Card+</button>
        <a className='know-more-link' href="">Know More</a>
      </div>
    )
  }
}
