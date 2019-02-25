import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';


class Todos extends Component {
  

  render() {
    return this.props.todos.map((todo) => (
      // Each child in an iterator should have unique key prop
      <TodoItem key={todo.id} todo={todo} toggleComplete={this.props.toggleComplete} delTodo={this.props.delTodo}/>
    ));
  }
}



// PropTypes to validate properties that a component should have
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

export default Todos;