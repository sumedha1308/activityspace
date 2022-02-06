import React from 'react';
import './star.css';

class Star extends React.Component {
  changeRating = (e) => {
    this.props.changeRating(parseInt(e.target.id, 10));
  };

  filledStarElement = (index) => (
    <div
      className="filled-stars"
      style={{ display: 'inline-block', color: 'orange' }}
      key={index}
      id={index}
      onClick={this.changeRating}
    >
      &#9733;
    </div>
  );

  emptyStarElement = (index) => (
    <div
      className="empty-stars"
      style={{ display: 'inline-block', color: 'grey' }}
      key={index}
      id={index}
      onClick={this.changeRating}
    >
      &#9733;
    </div>
  );

  render() {
    return (
      <React.Fragment>
        {[1, 2, 3, 4, 5].map((i) => {
          if (i <= parseInt(this.props.rating, 10)) {
            return this.filledStarElement(i);
          }
          return this.emptyStarElement(i);
        })}
      </React.Fragment>
    );
  }
}

export default Star;
