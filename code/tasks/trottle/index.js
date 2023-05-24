const throttle = (fn, interval) => {
  let isThrottled = false;
  let savedArgs = null;
  return (...args) => {
    if (isThrottled) {
      savedArgs = args;
      return;
    }
    fn(...args);
    isThrottled = true;
    setTimeout(() => {
      if (savedArgs) {
        fn(...savedArgs);
        savedArgs = null;
      }
      isTrottled = false;
    }, interval);
  };
};

const mp = throttle((v) => console.log(v), 3000);

mp(10);
mp(10);
mp(10);
mp(10);
mp(10);
mp(10);
mp(10);