import React, {Component} from 'react';
import Form from './Form';
import Todo from './Todo';
import Img from './right-img.svg';
import {Container, Row, Col} from 'reactstrap';

export default class TodoApp extends Component {
  state = {
    todos: [],
    todosToShow: 'all',
  };

  componentDidMount = () => {
    const items = localStorage.getItem('todos');
    if (items) {
      this.setState(JSON.parse(items));
    }
  };

  updateLocalStorage = (state = null) => {
    localStorage.setItem('todos', JSON.stringify(state || this.state));
  };

  addTodo = todo => {
    this.setState(
      {
        todos: [todo, ...this.state.todos],
      },
      () => {
        this.updateLocalStorage();
      },
    );
  };

  toggleComplete = id => {
    this.setState(
      {
        todos: this.state.todos.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              complete: !todo.complete,
            };
          } else {
            return todo;
          }
        }),
      },
      () => {
        this.updateLocalStorage();
      },
    );
  };

  updateTodoShow = e => {
    this.setState(
      {
        todosToShow: e,
      },
      () => {
        this.updateLocalStorage();
      },
    );
  };

  handleDelete = id => {
    this.setState(
      {
        todos: this.state.todos.filter(todo => todo.id !== id),
      },
      () => {
        this.updateLocalStorage();
      },
    );
  };

  render() {
    let todos = [];

    if (this.state.todosToShow === 'all') {
      todos = this.state.todos;
    } else if (this.state.todosToShow === 'active') {
      todos = this.state.todos.filter(todo => !todo.complete);
    } else if (this.state.todosToShow === 'complete') {
      todos = this.state.todos.filter(todo => todo.complete);
    }

    return (
      <div className="app-container">
        <Container>
          <Row>
            <Col lg="7 left-content">
              <div className="button-filter">
                <button
                  style={{
                    color: this.state.todosToShow === 'all' ? 'red' : 'black',
                  }}
                  className="btn btn-outline btn-md"
                  onClick={() => this.updateTodoShow('all')}>
                  ALL
                  <span className="counter">
                    {this.state.todos.filter(todo => todo).length}
                  </span>
                </button>
                <button
                  style={{
                    color:
                      this.state.todosToShow === 'active' ? 'red' : 'black',
                  }}
                  className="btn btn-outline btn-md"
                  onClick={() => this.updateTodoShow('active')}>
                  ACTIVE
                  <span className="counter">
                    {this.state.todos.filter(todo => !todo.complete).length}
                  </span>
                </button>
                <button
                  style={{
                    color:
                      this.state.todosToShow === 'complete' ? 'red' : 'black',
                  }}
                  className="btn btn-outline btn-md"
                  onClick={() => this.updateTodoShow('complete')}>
                  COMPLETE
                  <span className="counter">
                    {this.state.todos.filter(todo => todo.complete).length}
                  </span>
                </button>
              </div>

              <Form addByProps={this.addTodo} />

              {todos.map(todo => (
                <Todo
                  delete={() => this.handleDelete(todo.id)}
                  key={todo.id}
                  toggleComplete={() => this.toggleComplete(todo.id)}
                  todo={todo}
                />
              ))}
            </Col>
            <Col className="align-self-center" lg="5">
              <img src={Img} className="img-fluid right-img" alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
