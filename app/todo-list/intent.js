import TodosState from '../states/todos';

const ENTER_KEYCODE = 13;

export function intent({DOM}) {
  const add$ = DOM.select('.new')
      .events('keydown')
      .filter(({keyCode}) => keyCode === ENTER_KEYCODE)
      .map(e => {
        const val = e.target.value;
        e.target.value = '';
        return val;
      })
      .filter(text => text.trim());

  const toggle$ = DOM.select('.label')
      .events('mouseup')
      .map(ev => {
        return {checked: ev.target['data-todo-checked'], id: ev.target['data-todo-id']};
      });

  const remove$ = DOM.select('.remove')
      .events('mouseup')
      .map(ev => ev.target['data-todo-id']);

  return {
    add$,
    toggle$,
    remove$,
  };
}
