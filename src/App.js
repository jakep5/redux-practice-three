import React from 'react';

import { connect } from 'react-redux';

class App extends React.Component {
  render() {

    console.log("THE PROPS ARE", this.props);

    return (
      <h1>Redux Grocery List</h1>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentItems: state.currentItems
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItem: newItem => dispatch(actionIsToAddTheNewItem(newItem))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
