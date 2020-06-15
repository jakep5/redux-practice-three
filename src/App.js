import React from 'react';

import { connect } from 'react-redux';
import { actionIsToAddTheNewItem } from './actions/groceryListActions';

class App extends React.Component {
  state = {
    newItemInput: '',
  };

  handleChange = e => {
    this.setState({
      newItemInput: e.target.value
    })
  }

  render() {

    const currentList = this.props.currentItems.map( (item, index) =>
      <ul key={index}>{item}</ul> 
    )

    console.log("THE PROPS ARE", this.props);

    return (
      <div>
        <h1>Redux Grocery List</h1>
        <p>The current list is:</p>
          {currentList}
        <br />
        <form>
          <label>Input New Item:</label>
          <br />
          <input type="text" value={this.state.newItemInput} onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
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
