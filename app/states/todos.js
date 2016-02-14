import _ from 'lodash';

export default class {
  constructor(){
    this._todos = []
  }

  add(todo) {
    // Push firebase object into the list
    this._todos.push(todo);
  }

  remove(todo) {
    // Find the task according to its key and remove it
    this._todos = this._todos.filter((arrTodo) => {
      return arrTodo.key() !== todo.key();
    });
  };

  getAll() {
    // Map the todos with their values and add an id to recognize them
    return this._todos.map((todo, id) => {
      const todoWithId = todo.val();
      todoWithId.id = id;
      return todoWithId;
    });
  }
};
