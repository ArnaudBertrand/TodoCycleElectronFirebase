import isolate from '@cycle/isolate';
import {TodoList} from '../todo-list';

export function view(sources) {
  const todoList = isolate(TodoList)(sources);
  return todoList.DOM;
}
