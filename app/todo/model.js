import {Observable} from 'rxjs';

class TodoState{
  constructor(){
    this.todo = {};
  }

  getTodo() {
    return this.todo;
  }

  setTodo(todo) {
    this.todo = todo;
  }
}
export function model(actions$, props$) {
  props$.scan((state, props) => {
    return state.setTodo(props);
  });

  return Observable.merge(
      props$
  )
      .startWith(new TodoState())
      .scan((state, transform) => transform(state));
}