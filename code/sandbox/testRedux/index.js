import { addTask, addTaskComment, removeTask, removeTaskComment } from './actions';
import { applyMiddleware, legacy_createStore, compose } from 'redux';
import reducers from './reducers';
import { logger } from './logger';
import thunk from 'redux-thunk';

const store = legacy_createStore(
  reducers,
  compose(applyMiddleware(logger), applyMiddleware(thunk))
);

store.subscribe(() => {
  console.log(store.getState());
});

const test_comments = [
  { id: 1, taskId: 1, body: 'comment 1' },
  { id: 2, taskId: 1, body: 'comment 2' },
  { id: 5, taskId: 2, body: 'another comment' },
];

const test_tasks = [
  { id: 1, name: 'task 1' },
  { id: 2, name: 'task 2' },
];

store.dispatch(addTask(test_tasks[0]));
store.dispatch(addTask(test_tasks[1]));

store.dispatch(addTaskComment(test_comments[0]));
store.dispatch(addTaskComment(test_comments[1]));

// store.dispatch(removeTaskComment(1));
store.dispatch(removeTask(1));
