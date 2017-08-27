import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

// Pass down actions to the component I need them in
function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

// All data, action creatoes available to main component using connect
// Prevent data down MANY multiple levels through props. Connects inject data
const App = connect(mapStateToProps, //state - posts and comments 
	mapDispachToProps)(Main);	// Add all props, data from state, action creators to Main

export default App;
