import {Todo} from '../todo';
import {intent} from './intent';
import {model} from './model';
import {view} from './view';
import {h1} from '@cycle/dom';

function proxyCycleFire(CycleFire, actions) {
  const {add$, remove$} = actions;

  add$.subscribe(text => {
    const todo = {
      date: Date.now(),
      text,
      done: false
    };

    CycleFire.child('todos').push(todo);
  });

  remove$.subscribe(id => {
    console.log(id);
    //CycleFire.child('todos').child(id).remove();
  });

  return {
    add$: CycleFire.child('todos').observe('child_added'),
    remove$: CycleFire.child('todos').observe('child_removed')
  };
}

export function TodoList({DOM, CycleFire}) {
  const actions = intent({DOM});

  actions.remove$.subscribe((x) => {
    console.log(x);
  });

  const amendedActions = proxyCycleFire(CycleFire, actions);

  const state$ = model(amendedActions);

  const vtree$ = view(state$);

  return {
    DOM: vtree$,
  }
}