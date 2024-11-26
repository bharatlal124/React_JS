// create and export middleware function here

export function loggerMiddleware(store) {
  return function (next) {
    return function (action) {
      console.log("[LOG]: " + action.type + new Date().getTime());

      next(action);

      console.log(store.getState());
    };
  };
}
