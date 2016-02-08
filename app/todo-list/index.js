import {Todo} from '../todo';
import {intent} from './intent';
import {model} from './model';
import {view} from './view';

function proxyCycleFire(CycleFire, actions$) {
  const {add$, remove$} = actions$;

  add$.map(text => {
    console.log(text);

    const id = Date.now();
    const todo = {
      id: id,
      complete: false,
      text: text
    };

    CycleFire.child('todos').child(id).set(todo);
  });

  remove$.map(id => {
    CycleFire.child('todos').child(id).remove();
  });

  return {
    add$: CycleFire.child('todos').observe('child_added'),
    remove$: CycleFire.child('todos').observe('child_removed')
  };
}

export function TodoList(sources) {
  const actions$ = intent(sources.DOM);

  actions$.add$.map((x) => { console.log(x); });
  actions$.remove$.map((x) => { console.log(x); });

  const amendedActions$ = proxyCycleFire(sources.CycleFire, actions$);

  const state$ = model(amendedActions$);

  const vtree$ = view(state$);

  return {
    DOM: vtree$,
  }
}