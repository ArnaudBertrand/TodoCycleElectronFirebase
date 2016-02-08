import TodosState from '../states/todos';

export function intent(DOM) {
  const add$ = DOM.select('.new')
      .events('change')
      .map(e => e.target.value)
      .filter(text => text.trim());

  const remove$ = DOM.select('.remove')
      .events('click')
      .map(ev => ev.target['data-todo-id']);

  return {
    add$,
    remove$
  };
}
