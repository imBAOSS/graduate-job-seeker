import { connect } from 'react-redux';

import { fetchBench } from '../../actions/bench_actions';
import { selectBench } from '../../reducers/selectors';
import { createReview } from '../../actions/bench_actions.js';

import BenchShow from './bench_show';

const mapStateToProps = (state, { params }) => {
  const currentUser = state.session.currentUser;
  const benchId = parseInt(params.benchId);
  const bench = selectBench(state, benchId);
  return {
    currentUser,
    benchId,
    bench,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchBench: id => dispatch(fetchBench(id)),
  createReview: review => dispatch(createReview(review)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchShow);
