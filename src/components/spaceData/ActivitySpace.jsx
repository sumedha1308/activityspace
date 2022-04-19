/* eslint-disable no-underscore-dangle */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from 'react';
import axios from 'axios';
import Navbar from '../HomePage/NavBar/NavBar.jsx';
import './activitySpace.css';
import Star from './Star/Star.jsx';
import SpaceImage from './SpaceImage/SpaceImage.jsx';
import Rating from './Rating/Rating.jsx';
import Button from '../Button/Button.jsx';
import SpaceSummary from './SpaceSummary/SpaceSummary.jsx';
import SpaceDescCovidSafety from './SpaceDescCovidRules/SpaceDescCovidSafety.jsx';
import SubmitReview from './SubmitReview/SubmitReview.jsx';
import EditReviewRating from './EditReviewRating/EditReviewRating.jsx';
import Review from './Review/Review.jsx';
import Footer from '../Footer/Footer.jsx';
import DateTime from './DateTime/DateTime.jsx';

class ActivitySpace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spaceData: {},
      newRating: 0,
      newReview: '',
      spaceReviews: [],
      isLoggedIn: false,
      isEdit: false,
      isLoaded: false,
      userName: 'unknown',
      price: '',
      email: '',
      activityID: '',
    };
  }

  getData = () => {
    const promise1 = axios.get(`/api/activities/${this.props.match.params.activityId}`);
    const promise2 = axios.get('/api/users/me/');
    const promise3 = axios.get(`/api/reviews/${this.props.match.params.activityId}`);

    Promise.all([promise1, promise3])
      .then((responses) => {
        // console.log('activityID', this.props.match.params.activityId);
        console.log('params', this.props.match.params);
        // console.log('responses[1].data.reviewList', responses[1].data.reviewList);
        this.setState({
          spaceData: responses[0].data.activityData,
          spaceReviews: responses[1].data.reviewList,
          price: responses[0].data.activityData.price,
          activityID: this.props.match.params.activityId,
        });
        console.log('price1', this.state.spaceData.price);
        console.log('price', this.state.price);
      })
      .catch((error) => {
        // console.log('Error Occured');
      });

    promise2
      .then((response) => {
        this.setState({
          isLoggedIn: true,
          isLoaded: true,
          userName: response.data.userName,
          email: response.data.email,
          // spaceReviews: this.state.spaceReviews.push(this.state.userName),
        });
        // console.log('userName', this.state.userName);
        // console.log('email', this.state.email);
      })
      .catch((error) => {
        this.setState({
          isLoggedIn: false,
          isLoaded: true,
        });
        console.log('Error Occured');
      });
  };

  componentDidMount() {
    this.getData();
  }

  handleSubmitReview = () => {
    axios
      .post('/api/reviews/', {
        newRating: this.state.newRating,
        newReview: this.state.newReview,
        activityId: this.props.match.params.activityId,
        userName: this.state.userName,
      })
      .then((response) => {
        this.getData();
        this.setState({
          isEdit: false,
        });
      })
      .catch((error) => {
        console.log('Something Went Wrong!');
      });
  };

  handleEditCancel = () => {
    this.setState({
      isEdit: false,
      newRating: 0,
    });
  };

  handleEdit = () => {
    this.setState({
      isEdit: true,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleLogout = () => {
    axios
      .delete('/api/users/me/')
      .then(() => {
        this.getData();
      })
      .catch((error) => {
        console.log('some issue occured');
      });
  };

  changeRating = (newRating) => {
    this.setState({
      newRating,
    });
  };

  render() {
    // console.log('this.state.spaceData', this.state.spaceData);
    const space = this.state.spaceData;
    return (
      <React.Fragment>
        {!this.state.isLoaded ? (
          ''
        ) : (
          <div className="space-page-container">
            <Navbar
              loginStatus={this.state.isLoggedIn}
              handleLogout={this.handleLogout}
              userName={this.state.userName}
            />
            <div className="space-outer-box">
              {Object.keys(space).length !== 0 ? (
                <div className="space-detail-box">
                  <SpaceImage space={space} />
                  <div className="about-space-rating-box">
                    <SpaceSummary
                      space={space}
                      isLoggedIn={this.state.isLoggedIn}
                      avgRating={space.avgRating}
                      changeRating={() => {}}
                    />
                    <SpaceDescCovidSafety space={space} />
                    <div className="space-page-user-review">
                      {this.state.isLoggedIn ? (
                        // <div className="isLoggedIn">
                        space.userReview !== undefined ? (
                          !this.state.isEdit ? (
                            <EditReviewRating
                              loginStatus={this.state.isLoggedIn}
                              rating={space.userReview.rating}
                              changeRating={() => {}}
                              onClick={this.handleEdit}
                              buttonValue={'Edit'}
                              space={space}
                            />
                          ) : (
                            <div className="rating-review-sone-cancel">
                              <Rating
                                loginStatus={this.state.isLoggedIn}
                                rating={this.state.newRating}
                                changeRating={this.changeRating}
                              />
                              <Review value={this.state.newReview} onChange={this.handleChange} />
                              <div className="done-cancel-buttons">
                                <div className="done-cancel-button-margin">
                                  <Button onClick={this.handleSubmitReview} buttonValue={'Done'} />
                                </div>
                                <div className="done-cancel-button-margin">
                                  <Button onClick={this.handleEditCancel} buttonValue={'Cancel'} />
                                </div>
                              </div>
                            </div>
                          )
                        ) : (
                          <SubmitReview
                            loginStatus={this.state.isLoggedIn}
                            rating={this.state.newRating}
                            changeRating={this.changeRating}
                            value={this.state.newReview}
                            onChange={this.handleChange}
                            onClick={this.handleSubmitReview}
                            buttonValue={'Submit'}
                          />
                        )
                      ) : (
                        // <DateTime />
                        // </div>
                        <div>
                          <a href="/login">
                            <h3>
                              Please login to add review and book space!! You can close license related notification.
                            </h3>
                            <Button style={{ width: '10px' }} buttonValue={'Login'} />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                ''
              )}

              <DateTime
                activityId={this.state.activityID}
                email={this.state.email}
                userName={this.state.userName}
                price={this.state.price}
                isLoggedIn={this.state.isLoggedIn}
              />
              {this.state.spaceReviews.length !== 0 ? (
                <div className="all-reviews">
                  {this.state.spaceReviews.map((review) => {
                    if (space.userReview === undefined || review._id !== space.userReview._id) {
                      return (
                        <div key={review._id} className="space-review">
                          {/* {console.log('spaceReviews', review)} */}
                          <div className="all-userName-review">User Name : {review.userName}</div>
                          <Star rating={review.rating} changeRating={() => {}} />
                          {review.review !== '' ? <div className="all-userName-review">{review.review}</div> : ''}
                          <hr />
                        </div>
                      );
                    }
                    return '';
                  })}
                </div>
              ) : (
                ''
              )}
            </div>
            <Footer />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default ActivitySpace;
