/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import React from 'react';
import Footer from '../Footer/Footer.jsx';
import NavBar from './NavBar/NavBar.jsx';
import Banner from './Banner/Banner.jsx';
import Product from './Spaces/spaces.jsx';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="HomePage">
        <div style={{ minHeight: 'calc(100vh - 31px)' }}>
          <NavBar />
          <Banner />
          <Product />
        </div>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
