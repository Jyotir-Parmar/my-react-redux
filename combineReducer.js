const combineReducer = (reducers) => {
    const reducerFunc = {};
    let nextState = {};
    const redKeys = Object.keys(reducers);
    for (const key of redKeys) {
        if (typeof (reducers[key]) == "function")
            reducerFunc[key] = reducers[key];
    }
    return (state = {}, action) => {
        for (const key in reducerFunc) {
            nextState[key] = reducerFunc[key](state[key], action);
        }
        return nextState;
    }
}

export default combineReducer;