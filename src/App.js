import React from 'react';
import './App.css';
import TodoApp from './TodoApp';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faTrash,faEdit} from '@fortawesome/free-solid-svg-icons'

library.add(faBars,faTrash,faEdit)

 class App extends React.Component {

  render() {
    return (
              <TodoApp />
    );
  }
}

export default App;