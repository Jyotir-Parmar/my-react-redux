const createStore = (reducer, initialState) => {
    let reducer = reducer;
    let state = initialState;
    let listeners = [];

    const getStore = () => state;

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach((listener) => {
            listener(state);
        });
    }

    const subscribe = (listener) => {
        listeners.push(listener);
        const unsubscribe = () => {
            listeners = listeners.filter((listener1) => listener1 != listener);
        }
        return unsubscribe;
    }
    return { getStore, dispatch, subscribe };
}

export default createStore;