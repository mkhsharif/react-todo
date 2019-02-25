import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
  // Component only state
  state = {
    title: ''
  };

  onSubmit = (e) => {
      e.preventDefault();
      this.props.addTodo(this.state.title);
      this.setState({ title: '' });
  }

  onChange = (e) => {this.setState({ [e.target.name]: e.target.value })};
  render() {
    return (
      <form  onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input
          type="text"
          name="title"
          placeholder="Add Todo ..."
          value={this.state.title}
          onChange={this.onChange}
          style={{ flex: '10', padding: '10px' }}
        />
        <input
          type="submit"
          value="Sumbit"
          className="btn"
          style={{ flex: '1' }}
        />
      </form>
    );
  }
}

// PropTypes to validate properties a component should have
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
  };

export default AddTodo;
