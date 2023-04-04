const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

const addDate = (store) => (next) => (action) => {
  // BEGIN
  const result = next(action);
  if (action.type !== 'TASK_ADD') {
    return result;
  }
  const today = new Date();
  const formatedDate = today.toLocaleDateString('ru-RU');
  result.payload.task.text = `Задача на ${formatedDate}: ${result.payload.task.text}`;
  return result;
  // END
};

export default { logger, addDate };