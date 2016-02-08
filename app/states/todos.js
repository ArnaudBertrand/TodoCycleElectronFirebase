import _ from 'lodash';

var _todos = {};

export default class {
  constructor(){
  }

  add(todo) {
    _todos[todo.id] = todo;
  }

  remove(id) {
    delete _todos[id];
  };

  getAll() {
    return _.values(_todos);
  }
};
