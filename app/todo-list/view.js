import {div, checkbox, h1, span, ul, li, input, label, button, i, a} from '@cycle/dom';
import {Todo} from '../todo';

/** View elements **/
const todoInput = input('.new .form-control',
    {type: 'text', placeholder: 'What need to be done?'});

const makeTodo = function (todo){

  return div('.todo', [
    li('.collection-item', {}, [
      input('.done .filled-in',
          {type: 'checkbox', checked: todo.done ? 'checked' : null, value: todo.done}),
      label('.label', {'data-todo-id' : todo.id, 'data-todo-checked': todo.done}, todo.text),
      a('.secondary-content', {href: "#"},
          i('.material-icons .remove', {'data-todo-id' : todo.id}, 'delete')
      )
    ])
  ])
};

export function view($state) {
  return $state.map( state => {
    let todoArray = state.getAll();

    return div([
      todoInput,
      todoArray.length ? ul('.collection', {}, todoArray.map(todo => makeTodo(todo))) : null
    ])
  });
}
