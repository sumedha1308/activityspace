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
import AvgRating from './avgRating/AvgRating.jsx';
import Rating from './Rating/Rating.jsx';
import RatingReviewCount from './RatingReviewCount/RatingReviewCount.jsx';
import Button from '../Button/Button.jsx';

const path = require('path');

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
    };
  }

  getData = () => {
    const promise1 = axios.get(`/api/activities/${this.props.match.params.activityId}`);
    const promise2 = axios.get('/api/users/me/');
    const promise3 = axios.get(`/api/reviews/${this.props.match.params.activityId}`);

    Promise.all([promise1, promise3])
      .then((responses) => {
        console.log('responses[0].data.activityData', responses[0].data.activityData);
        console.log('responses[1].data.reviewList', responses[1].data.reviewList);
        this.setState({
          spaceData: responses[0].data.activityData,
          spaceReviews: responses[1].data.reviewList,
        });
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
        });
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
      .post('/api/reviews/  ', {
        newRating: this.state.newRating,
        newReview: this.state.newReview,
        activityId: this.props.match.params.activityId,
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
    console.log('this.state.spaceData', this.state.spaceData);
    const space = this.state.spaceData;
    return (
      <React.Fragment>
        {!this.state.isLoaded ? (
          ''
        ) : (
          <div>
            <Navbar
              loginStatus={this.state.isLoggedIn}
              handleLogout={this.handleLogout}
              userName={this.state.userName}
            />
            <div className="space-outer-box">
              {Object.keys(space).length !== 0 ? (
                <div>
                  <div>
                    <div className="space-detail-box">
                      <SpaceImage space={space} />
                      <div className="box-1">
                        <div className="about-space-box">
                          <div>
                            <p id="space-page-title">{space.title}</p>
                            <p id="space-page-author">by-{space.author}</p>
                          </div>
                        </div>
                        <div className="box-2">
                          <div>
                            <div>
                              <AvgRating
                                isLoggedIn={this.state.isLoggedIn}
                                avgRating={space.avgRating}
                                changeRating={() => {}}
                              />
                              <RatingReviewCount space={space} />
                            </div>
                            <div className="space-page-user-review">
                              <div>
                                {this.state.isLoggedIn ? (
                                  space.userReview !== undefined ? (
                                    !this.state.isEdit ? (
                                      <div>
                                        <Rating
                                          loginStatus={this.state.isLoggedIn}
                                          rating={space.userReview.rating}
                                          changeRating={() => {}}
                                        />
                                        <div>
                                          <div className="user-review-box">{space.userReview.review}</div>
                                        </div>
                                        <Button onClick={this.handleEdit} buttonValue={'Edit'} />
                                      </div>
                                    ) : (
                                      <div>
                                        <Rating
                                          loginStatus={this.state.isLoggedIn}
                                          rating={this.state.newRating}
                                          changeRating={this.changeRating}
                                        />
                                        <div>
                                          <textarea
                                            className="user-review-box"
                                            name="newReview"
                                            value={this.state.newReview}
                                            onChange={this.handleChange}
                                            placeholder="Write your review here"
                                          ></textarea>
                                        </div>
                                        <Button onClick={this.handleSubmitReview} buttonValue={'Done'} />
                                        <Button onClick={this.handleEditCancel} buttonValue={'Cancel'} />
                                      </div>
                                    )
                                  ) : (
                                    <div>
                                      <Rating
                                        loginStatus={this.state.isLoggedIn}
                                        rating={this.state.newRating}
                                        changeRating={this.changeRating}
                                      />
                                      <div>
                                        <textarea
                                          className="user-review-box"
                                          name="newReview"
                                          value={this.state.newReview}
                                          onChange={this.handleChange}
                                          placeholder="Write your review here"
                                        ></textarea>
                                      </div>
                                      <Button onClick={this.handleSubmitReview} buttonValue={'Submit'} />
                                    </div>
                                  )
                                ) : (
                                  <div>
                                    <div>
                                      <a href="/login">
                                        {/* <button className="login-btn">Login to Review</button> */}
                                        <Button style={{ width: '10px' }} buttonValue={'Login to Review'} />
                                      </a>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p id="space-page-desc">{space.description}</p>
                  </div>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default ActivitySpace;
