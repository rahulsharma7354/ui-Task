import React, { Component } from 'react'
import HealthCard1 from './Assets/Health-1.png'
import HealthCard2 from './Assets/Health-2.png'
import Carcard from './Assets/Car-insurance.png'
export default class cards extends Component {
  render() {
    return (
      <div className='cards-container'>
        <h4 className='cards-heading'>Your Cards</h4>
        <p className='add-cards'>Add and Manage Cards here</p>
        {/* <img className='cards' src={Card} alt=""/> */}
        <div className="cards-container-section">
          <img className='carinsurance' src={Carcard} alt="" />
          <img className='healthcard-first' src={HealthCard1} alt="" />
          <img className='healthcard-second' src={HealthCard2} alt="" />
        </div>
        <button className='add-card-button'>Add Card+</button>
        <a className='know-more-link' href="">Know More</a>
      </div>
    )
  }
}
