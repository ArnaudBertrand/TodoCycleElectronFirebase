import {div, checkbox, h1, span, input, button} from '@cycle/dom';
import {Todo} from '../todo';

/** View elements **/
const todoInput = input('.new .form-control',
    {type: 'text', placeholder: 'What need to be done?'});

const makeTodo = function (todo){
  console.log(todo.id);
  return div('.todo', [
    h1('.text',  {'data-todo-id' : todo.id}, [
      input('.done', {type: 'checkbox'},'Check it'),
      todo.text,
      span('.remove', {'data-todo-id' : todo.id}, ' X')
    ])
  ])
};

export function view($state) {
  return $state.map( state => {
    let todoArray = state.getAll();

    return div([
      todoInput,
      todoArray.map(todo => makeTodo(todo))
    ])
  });
}
