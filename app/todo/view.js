export function view(state$) {
  return state$.map(state => state.getTodo()).map(todo => div('.todo', [
    h1('.text',  {'data-todo-id' : todo.id}, [
      todo.text,
      span('.remove', {'data-todo-id' : todo.id}, ' X')
    ])
  ]));
}