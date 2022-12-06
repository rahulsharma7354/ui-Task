import React, { Component } from 'react'
import './Body.scss'
import { Icon } from '@iconify/react';
export default class Body extends Component {
  render() {
    return (
      <div className='body-container'>
        <img className='insurance-heading' src="./Assets/insurance.png" alt="" />
        <div className="container-section-body">
          <div className='current-claim-section'>
            <h4 className='claim-heading'>Current Claims</h4>
            <p className='claim-status'>Track Your Claim Status</p>
            <div className="progress-cards">
              <div className='health-claim'>
                <Icon className='arrow-icon' icon="material-symbols:arrow-back-rounded" width={22} hFlip={true} />
                <p className='health-claim-heading'>Health Insurance Claim</p>
                <p className='health-number'>43782674567</p>
                <Icon className='health-dollar' icon="twemoji:heavy-dollar-sign" width={20} height={18} />
                <span className='health-insurance-amount'>2347.08</span>
                <div className="progress-track">
                <span className='initiated'>
                  Initiated
                </span>
                  <ul id="progressbar">
                    <li className="step0 active " id="step1">
                    </li>
                    <li className="step0 active text-center" id="step2">
                      Verified
                    </li>
                    <li className="step0 active text-right" id="step3">
                      <span id="three">Processing</span>
                    </li>
                    <li className="step0 text-right" id="step4">
                      Settled
                    </li>
                  </ul>
                </div>
              </div>
              <div className='car-claim'>
                <Icon className='arrow-icon' icon="material-symbols:arrow-back-rounded" width={22} hFlip={true} />
                <p className='health-claim-heading'>Car Insurance Claim</p>
                <p className='health-number'>7293749392002</p>
                <Icon className='health-dollar' icon="twemoji:heavy-dollar-sign" width={20} height={18} />
                <span className='health-insurance-amount'>2347.08</span>
                <div className="progress-track-car">
                <span className='initiated-car'>
                  Initiated
                </span>
                  <ul id="progressbarCar">
                    <li className="step0 active " id="step1Car">
                    </li>
                    <li className="step0 active text-center" id="step2Car">
                      Verified
                    </li>
                    <li className="step0 active text-right" id="step3Car">
                      <span id="three">Processing</span>
                    </li>
                    <li className="step0 text-right" id="step4Car">
                      Settled
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <h4 className='consutlations'>Consutlations</h4>
            <p className='consutlation-content'>Connect with best for your health guidance</p>
            <div className='image-container'>
              <img className='lab-image' src="./Assets/labs.png" alt=""/>
              <img className='doctor-image' src="./Assets/Doctors.png "alt=""/>
              <img className='therapy-image' src="./Assets/Therapy.png" alt=""/>
            </div>
          </div>
          <div className='activityfeeds-continer'>
            <h4 className='activity-head'>Activity Feed</h4>
            <div className='feeds-continer'>
              <img className='icon-right' src="./Assets/Tick.png" alt="" width={80} />
              <div className='feed-details'>
                <h4 className='feed-headings'>Booked Doctor Consulation</h4>
                <p className='feed-date'>3rd August 2022</p>
              </div>
            </div>
            <div className='feeds-continer'>
              <img className='icon-right' src="./Assets/Tick.png" alt="" width={80} />
              <div className='feed-details'>
                <h4 className='feed-headings'>Requested Insured Changes</h4>
                <p className='feed-date'>1rst August 2022</p>
              </div>
            </div>
            <div className='feeds-continer'>
              <img className='icon-right' src="./Assets/Tick.png" alt="" width={80} />
              <div className='feed-details'>
                <h4 className='feed-headings'>Raised Claim For #910256</h4>
                <p className='feed-date'>30th July 2022</p>
              </div>
            </div>
            <div className='feeds-continer'>
              <img className='icon-right' src="./Assets/Tick.png" alt="" width={80} />
              <div className='feed-details'>
                <h4 className='feed-headings'>Query For ACH Payment</h4>
                <p className='feed-date'>30th July 2022</p>
              </div>
            </div>
            <div className='feeds-continer'>
              <img className='icon-right' src="./Assets/Tick.png" alt="" width={80} />
              <div className='feed-details'>
                <h4 className='feed-headings'>Renewed Health Policy #..</h4>
                <p className='feed-date'>30th July 2022</p>
              </div>
            </div>
            <div className='feeds-continer'>
              <img className='icon-right' src="./Assets/Tick.png" alt="" width={80} />
              <div className='last-feed-details'>
                <h4 className='feed-headings'>Requested Quote For Family</h4>
                <p className='last-feed-date'>28th July 2022</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
