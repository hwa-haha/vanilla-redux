import {createStore} from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS ="MINUS";

// data를 modify 해주는 함수로 reducer가 return하는 것은 application에 있는 data가 됨
const countModifier = (count = 0, action) => {
  switch (action.type){
    case"ADD":
      return count +1;
    case"MINUS":
      return count -1;
    default:
      return count;
  }
};

//Store는 data를 저장, CreateStore는 reducer를 요구
const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
}

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({type: ADD});
}

const handleMinus = () => {
  countStore.dispatch({type: MINUS});
}

add.addEventListener("click", () => handleAdd);
minus.addEventListener("click", () => handleMinus);


// let count = 0;
// number.innerText = count;

// const updateText = () => {
//   number.innerText = count;
// }

// const handleAdd = () => {
//   count = count + 1;
//   updateText();
// }

// const handleMinus = () => {
//   count = count - 1;
//   updateText();
// }

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);

