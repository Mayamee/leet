// Мидлвара со вложенными стрелочными функциями

export const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info('dispatching', action);
	console.log('current state', store.getState()); // выводим текущее состояние в консоль перед обработкой action
  const result = next(action);
  console.log('next state', store.getState()); // выводим текущее состояние в консоль после обработки action
  console.groupEnd();
  return result;
};
