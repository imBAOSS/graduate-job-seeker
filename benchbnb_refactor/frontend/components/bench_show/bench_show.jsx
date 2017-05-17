import React from 'react';
import { Link, withRouter } from 'react-router';

import BenchMap from '../bench_map/bench_map';
import Review from '../review/review';
import ReviewForm from '../review/review_form';

class BenchShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { bench, benchId, fetchBench, children } = this.props;
    const benches = {
      [benchId]: bench
    };
    return(
      <div className="single-bench-show">
        <div className="single-bench-map">
          <Link to="/">Back to Benches Index</Link>
          <BenchMap
            benches={benches}
            benchId={benchId}
            singleBench={true}
            fetchBench={fetchBench}
            />
        </div>
        <div className="right-half bench-details">
          <div>
            <ul className="bench-list">
              <img className="index-image" src={bench.picture_url}/>
              <li>Rating: {bench.average_rating || "No reviews yet"}</li>
              <li>Description: {bench.description}</li>
              <li>Seats: {bench.seating}</li>
              <li>Latitude: {bench.lat}</li>
              <li>Longitude: {bench.lng}</li>
            </ul>
            <br/>
          </div>

          <div className="reviews">
            <h3>Reviews</h3>
              <Review
                benchId={benchId}
                reviews={bench.reviews} />
          </div>
          <ReviewForm
            benchId={benchId}
            createReview={this.props.createReview}
            currentUser={this.props.currentUser} />
        </div>
      </div>
    );
  }
}

export default withRouter(BenchShow);
