import React from 'react';

export const ReduxContext = React.createContext("reduxStore");

const Provider = ({ store, children }) => (
    <ReduxContext.Provider value={store}>{children}</ReduxContext.Provider>
  );

export default Provider;