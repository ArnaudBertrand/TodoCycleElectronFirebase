import TodosState from '../states/todos';
import {Observable} from 'rx';

export function model(actions) {
  const add$ = actions.add$
      .map(todo => function (state){
        state.add(todo);
        return state;
      });

  const change$ = actions.change$
      .map(todo => function (state){
        state.change(todo);
        return state;
      });

  const move$ = actions.move$
      .map(todo => function (state){
        state.move(todo);
        return state;
      });

  const remove$ = actions.remove$
      .map(todo => function (state){
        state.remove(todo);
        return state;
      });

  return Observable.merge(
      add$,
      change$,
      move$,
      remove$
  )
    .startWith(new TodosState())
    .scan((state, transform) => transform(state));
}
