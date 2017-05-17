import React from 'react';
import { Link, withRouter } from 'react-router';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { rating: 5, body: "", reviewForm: false };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toReviewForm = this.toReviewForm.bind(this);
    this.toReviewButton = this.toReviewButton.bind(this);
    this.reviewSection = this.reviewSection.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const benchId = parseInt(this.props.benchId);
    const review = Object.assign({}, this.state, {
      bench_id: benchId
    });
    this.props.createReview({review});
    this.toReviewButton();
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  reviewButton() {
    return (
      <button
        className="review-button"
        onClick={ this.toReviewForm }>
        Leave a Review
      </button>
    );
  }

  reviewForm() {
    return (
      <div className="review-form">
        <form onSubmit={ this.handleSubmit }>
          <label>Rating</label>
          <br/>
          <input type="number"
            value={ this.state.rating }
            onChange={ this.update("rating") }/>
          <br/>

          <label>Comment</label>
          <br/>
          <textarea
            cols='30'
            rows='10'
            value={ this.state.body }
            onChange={ this.update("body") }></textarea>
          <br/>
          <input type="submit"/>
        </form>
        <button onClick={ this.toReviewButton }>Cancel</button>
      </div>
    );
  }

  toReviewForm() {
    if (this.props.currentUser) {
      this.setState({reviewForm: true});
    } else {
      this.props.router.push('/login');
    }
  }

  toReviewButton() {
    this.setState({reviewForm: false});
  }

  reviewSection() {
    if (this.state.reviewForm) {
      return(this.reviewForm());
    } else {
      return(this.reviewButton());
    }
  }

  render () {
    return(
      <div>
        { this.reviewSection() }
      </div>
    )
  }
}

export default withRouter(ReviewForm);
