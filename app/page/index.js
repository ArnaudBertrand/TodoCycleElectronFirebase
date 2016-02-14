import {intent}   from './intent';
import {model}    from './model';
import {view}     from './view';

import {TodoList} from '../todo-list';

export function Page({DOM, CycleFire}) {
  const todoList = TodoList({DOM, CycleFire});

  const vtree$ = view({todoList: todoList.DOM});

  return {
    DOM: vtree$,
  }
}