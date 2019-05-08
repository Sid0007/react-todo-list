import React, {Component} from 'react';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';
//showing
class App extends Component {
  render() {
  return (
    <div>
    <div className="container">
      <div className="row">
       <TodoInput></TodoInput>
        <TodoList></TodoList>
       </div>
    </div>    
    </div>
  );
  }
}

export default App;
