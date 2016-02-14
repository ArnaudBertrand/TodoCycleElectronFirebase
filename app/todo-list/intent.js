import TodosState from '../states/todos';

const ENTER_KEYCODE = 13;

export function intent({DOM}) {
  const add$ = DOM.select('.new')
      .events('keydown')
      .filter(({keyCode}) => keyCode === ENTER_KEYCODE)
      .map(e => e.target.value)
      .filter(text => text.trim());

  const remove$ = DOM.select('.remove')
      .events('click')
      .map(ev => ev.target['data-todo-id']);

  return {
    add$,
    remove$,
  };
}
