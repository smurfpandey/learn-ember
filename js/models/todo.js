Todos.Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

Todos.Todo.Fixture = [
  {
    id: 1,
    title: 'Learn Ember.js',
    isCompleted: false
  },
  {
    id: 2,
    title: '...',
    isCompleted: false
  },
  {
    id: 3,
    title: 'Profit?',
    isCompleted: false
  }
]
