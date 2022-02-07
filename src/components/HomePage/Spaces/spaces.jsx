/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import React from 'react';
import './spaces.css';
import { Link } from 'react-router-dom';

class Space extends React.Component {
  render() {
    return (
      <div>
        <div className="product-headline">Find a unique space for your activity to throw an unforgettable event!!</div>
        <div className="covid-safety">
          <img className="spray-img" src="/activityPics/spray-bottle-white.svg"></img>
          <div className="covid-guideline">
            We’ve provided covid 19 guidelines and enhanced safety measures for owners so guests can book with peace of
            mind.
          </div>
        </div>
        <main className="main-content">
          <div className="card">
            <Link to="/activities/1">
              <div className="img-wrapper">
                <img className="card-img" src="/activityPics/Meeting_hall.jpg" />
              </div>
              <div className="activity-name">Corporate Meetings</div>
            </Link>
          </div>

          <div className="card">
            <Link to="/activities/2">
              <div className="img-wrapper">
                <img className="card-img" src="/activityPics/durbar_conference.jpg" />
              </div>
              <div className="activity-name">Conferences</div>
            </Link>
          </div>

          <div className="card">
            <Link to="/activities/3">
              <div className="img-wrapper">
                <img className="card-img" src="/activityPics/jsw_autorium_delhi.jpg" />
              </div>
              <div className="activity-name">Performance</div>
            </Link>
          </div>

          <div className="card">
            <Link to="/activities/4">
              <div className="img-wrapper">
                <img className="card-img" src="/activityPics/leela_goa_party.jpg" />
              </div>
              <div className="activity-name">Party</div>
            </Link>
          </div>

          <div className="card">
            <Link to="/activities/5">
              <div className="img-wrapper">
                <img className="card-img" src="/activityPics/date_high_ultra_banglore.jpg" />
              </div>
              <div className="activity-name">Date</div>
            </Link>
          </div>

          <div className="card">
            <Link to="/activities/6">
              <div className="img-wrapper">
                <img className="card-img" src="/activityPics/wedding-park-hyatt-goa.jpg" />
              </div>
              <div className="activity-name">Wedding</div>
            </Link>
          </div>

          <div className="card">
            <Link to="/activities/7">
              <div className="img-wrapper">
                <img className="card-img" src="/activityPics/baby_shower.jpg" />
              </div>
              <div className="activity-name">Baby Shower</div>
            </Link>
          </div>

          <div className="card">
            <Link to="/activities/8">
              <div className="img-wrapper">
                <img className="card-img" src="/activityPics/Tamil-Nadu_Connemara_credit-Taj_family.jpg" />
              </div>
              <div className="activity-name">Family get-together</div>
            </Link>
          </div>
        </main>
      </div>
    );
  }
}

export default Space;
