import {intent} from './intent';
import {model} from './model';
import {view} from './view';

export function Todo(sources) {
  const actions$ = intent(sources);

  const state$ = model(actions$, props);

  const vtree$ = view(state$);

  return {
    DOM: vtree$,
    actions.remove$,
  }
}