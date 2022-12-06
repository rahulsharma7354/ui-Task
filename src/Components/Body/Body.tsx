import React, { Component } from 'react'
import './Body.scss'
import { Icon } from '@iconify/react';
export default class Body extends Component {
  render() {
    return (
      <div className='body-container m'>
        <img className='insurance-heading' src="./Assets/insurance.png" alt="" />
        <div className="container-section-body">
          <div className='current-claim-section'>
            <h4 className='claim-heading ms-4 ps-1 mt-4'>Current Claims</h4>
            <p className='claim-status ms-4 ps-1'>Track Your Claim Status</p>
            <div className="progress-cards">
              <div className='health-claim'>
                <Icon className='arrow-icon mt-2 me-2 pe-1' icon="material-symbols:arrow-back-rounded" width={22} hFlip={true} />
                <p className='health-claim-heading mt-2 '>Health Insurance Claim</p>
                <p className='health-number mb-1 mt-4 ms-3'>43782674567</p>
                <Icon className='health-dollar ms-2 ps-1' icon="twemoji:heavy-dollar-sign" width={20} height={18} />
                <span className='health-insurance-amount ms-1'>2347.08</span>
                <div className="progress-track">
                <span className='initiated mt-2  '>
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
                <Icon className='arrow-icon mt-2 me-2 pe-1' icon="material-symbols:arrow-back-rounded" width={22} hFlip={true} />
                <p className='health-claim-heading mt-2'>Car Insurance Claim</p>
                <p className='health-number mb-1 mt-4 ms-3'>7293749392002</p>
                <Icon className='health-dollar ms-2 ps-1' icon="twemoji:heavy-dollar-sign" width={20} height={18} />
                <span className='health-insurance-amount ms-1'>2347.08</span>
                <div className="progress-track-car ms-2">
                <span className='initiated-car mt-2  ms-2 ps-1'>
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
            <h4 className='consutlations ms-4 mt-3 ps-1'>Consutlations</h4>
            <p className='consutlation-content ms-4 ps-1 mt-1'>Connect with best for your health guidance</p>
            <div className='image-container'>
              <img className='lab-image' src="./Assets/labs.png" alt=""/>
              <img className='doctor-image' src="./Assets/Doctors.png "alt=""/>
              <img className='therapy-image' src="./Assets/Therapy.png" alt=""/>
            </div>
          </div>
          <div className='activityfeeds-continer'>
            <h4 className='activity-head mt-4 ms-4 mb-3'>Activity Feed</h4>
            <div className='feeds-continer mb-1'>
              <img className='icon-right ms-4 mt-2 me-3 ms-4 mt-2 me-3' src="./Assets/Tick.png" alt="" width={80} />
              <div className='feed-details'>
                <h4 className='feed-headings mt-3 mt-3'>Booked Doctor Consulation</h4>
                <p className='feed-date mt-4 pt-3 '>3rd August 2022</p>
              </div>
            </div>
            <div className='feeds-continer mb-1'>
              <img className='icon-right ms-4 mt-1 me-3' src="./Assets/Tick.png" alt="" width={80} />
              <div className='feed-details'>
                <h4 className='feed-headings mt-2'>Requested Insured Changes</h4>
                <p className='feed-date mt-3 pt-3'>1rst August 2022</p>
              </div>
            </div>
            <div className='feeds-continer mb-1'>
              <img className='icon-right ms-4 mt-1 me-3' src="./Assets/Tick.png" alt="" width={80} />
              <div className='feed-details'>
                <h4 className='feed-headings mt-2'>Raised Claim For #910256</h4>
                <p className='feed-date mt-3 pt-3'>30th July 2022</p>
              </div>
            </div>
            <div className='feeds-continer mb-1'>
              <img className='icon-right ms-4 mt-1 me-3' src="./Assets/Tick.png" alt="" width={80} />
              <div className='feed-details'>
                <h4 className='feed-headings mt-2'>Query For ACH Payment</h4>
                <p className='feed-date mt-3 pt-3'>30th July 2022</p>
              </div>
            </div>
            <div className='feeds-continer mb-1'>
              <img className='icon-right ms-4 mt-1 me-3' src="./Assets/Tick.png" alt="" width={80} />
              <div className='feed-details'>
                <h4 className='feed-headings mt-2'>Renewed Health Policy #..</h4>
                <p className='feed-date mt-3 pt-3'>30th July 2022</p>
              </div>
            </div>
            <div className='feeds-continer mb-1'>
              <img className='icon-right ms-4 mt-1 me-3' src="./Assets/Tick.png" alt="" width={80} />
              <div className='last-feed-details'>
                <h4 className='feed-headings mt-2'>Requested Quote For Family</h4>
                <p className='last-feed-date mt-3 pt-3'>28th July 2022</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
