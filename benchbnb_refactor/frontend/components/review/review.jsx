import React from 'react';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.reviews = this.props.reviews;
    this.reviewList = this.reviewList.bind(this);
  }

  reviewList(reviews = []) {
    return (
      reviews.map((review) => {
        return(
          <div key={review.id}>
            <ul className="review-list">
              <li>Rating: { review.rating }</li>
              <li>{ review.body }</li>
            </ul>
          </div>
        );
      })
    );
  }

  render() {
    return (
      <div>
        { this.reviewList(this.reviews) }
      </div>
    )
  }
}

export default Review;
