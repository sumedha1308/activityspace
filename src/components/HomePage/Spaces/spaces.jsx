/* eslint-disable no-unused-vars */
import React from 'react';
import './spaces.css';
import { Link } from 'react-router-dom';

function Product() {
  return (
    <div>
      <div className="product-headline" style={{ textAlign: 'center' }}>
        Find a unique space for your activity to make it unforgettable!!
      </div>
      <main className="main-content">
        <div className="card">
          <Link to="/products/605a37864a2a8cb97b9fd67b">
            <div className="img-wrapper">
              <img className="card-img" src="/activityPics/Meeting_hall.jpg" />
            </div>
            <p>Corporate Meetings</p>
          </Link>
        </div>

        <div className="card">
          <Link to="/products/605a37864a2a8cb97b9fd67c">
            <div className="img-wrapper">
              <img className="card-img" src="/activityPics/durbar_conference.jpg" />
            </div>
            <p>Conferences</p>{' '}
          </Link>
        </div>

        <div className="card">
          <Link to="/products/605a37864a2a8cb97b9fd67d">
            <div className="img-wrapper">
              <img className="card-img" src="/activityPics/jsw_autorium_delhi.jpg" />
            </div>
            <p>Performance</p>
          </Link>
        </div>

        <div className="card">
          <Link to="/products/605a37864a2a8cb97b9fd67e">
            <div className="img-wrapper">
              <img className="card-img" src="/activityPics/leela_goa_party.jpg" />
            </div>
            <p>Party</p>
          </Link>
        </div>

        <div className="card">
          <Link to="/products/605a38634a2a8cb97b9fd680">
            <div className="img-wrapper">
              <img className="card-img" src="/activityPics/date_high_ultra_banglore.jpg" />
            </div>
            <p>Date</p>
          </Link>
        </div>

        <div className="card">
          <Link to="/products/605a3cd94a2a8cb97b9fd685">
            <div className="img-wrapper">
              <img className="card-img" src="/activityPics/wedding-park-hyatt-goa.jpg" />
            </div>
            <p>Wedding</p>
          </Link>
        </div>

        <div className="card">
          <Link to="/products/605a3dc44a2a8cb97b9fd692">
            <div className="img-wrapper">
              <img className="card-img" src="/activityPics/baby_shower.jpg" />
            </div>
            <p>Baby Shower</p>
          </Link>
        </div>

        <div className="card">
          <Link to="/products/605a3d914a2a8cb97b9fd68b">
            <div className="img-wrapper">
              <img className="card-img" src="/activityPics/Tamil-Nadu_Connemara_credit-Taj_family.jpg" />
            </div>
            <p>Family get-together</p>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Product;
