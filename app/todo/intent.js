export function intent(DOM) {
  const remove$ = DOM.select('.remove')
      .events('click')
      .map(ev => ev.target['data-todo-id']);

  return {
    remove$
  };
}
