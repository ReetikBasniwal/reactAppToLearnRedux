// STORE, NEXT (next middleware), ACTION

export const loggerMiddleware = (store) => {
    return function(next){
        return function(action){
            // log actions
            console.log("[LOG]: ", action.type + " " + new Date().toUTCString());
            // call next middleware in the pipeline
            next(action);
            // log the modified state
            console.log(store.getState());
        }
    }
}