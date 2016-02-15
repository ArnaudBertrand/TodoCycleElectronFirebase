import _ from 'lodash';

export default class {
  constructor(){
    this._todos = []
  }

  add(todo) {
    // Push firebase object into the list
    this._todos.push(todo);
  }

  change(todo) {
    for(let i = 0; i < this._todos.length ; i++){
      if(this._todos[i].key() === todo.key()){
        return this._todos[i] = todo;
      }
    }
  }

  move(todo) {
    console.log('move');
    console.log(todo);
  }

  remove(todo) {
    // Find the task according to its key and remove it
    this._todos = this._todos.filter((arrTodo) => {
      return arrTodo.key() !== todo.key();
    });
  };

  getAll() {
    // Map the todos with their values and add an id to recognize them
    return this._todos.map((todo) => {
      const todoWithId = todo.val();
      todoWithId.id = todo.key();
      return todoWithId;
    });
  }
};
