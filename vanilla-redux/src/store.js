import { configureStore, createSlice } from "@reduxjs/toolkit";

/*
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
key:"todo", //localStorage에 저장될 key값
storage:storage
};
const allReducer = combineReducers({
reducer
});
const store = createStore(persistReducer(persistConfig, allReducer));*/

/*const addTodo = createAction("ADD");
const deleteTodo = createAction("DELETE");

const reducer = (state = [], action) => {
  switch (action.type) {
    case addTodo.type:
      return [{ text: action.payload, id: Date.now() }, ...state];
    case deleteTodo.type:
        return state.filter(toDo => toDo.id !== action.payload);
    default:
      return state;
  }
};

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) =>
    state.filter(toDo => toDo.id !== action.payload)
});
*/

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => state.filter(toDo => toDo.id !== action.payload)
  }
});

export const { add, remove } = toDos.actions;

export default configureStore({ reducer: toDos.reducer });