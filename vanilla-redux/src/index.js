import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

/*import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const persistor = persistStore(store);

Provider 하위로 PersistGate 추가
〈Provider store={store}〉
〈PersistGate loading={null} persistor={persistor}〉
〈App /〉
〈/PersistGate〉
〈/Provider〉*/