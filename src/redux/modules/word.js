import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
// 액션
const LOAD = "words/LOAD";
const ADD = "words/ADD";
const initialState = {
  words: [],
};
// 액션 생성 함수
//여기에 인자로 들어가는 값(words_list)을 리듀서에서 action.word.words_list 로 통일 시켜줘야함.
export const loadWords = (words_list) => {
  return { type: LOAD, words_list };
};
export const addWords = (words_list) => {
  return { type: ADD, words_list };
};
// 미들웨어
export const loadWordsFB = () => {
  return async function (dispatch) {
    const words_data = await getDocs(collection(db, "words"));
    let words_list = [];
    words_data.forEach((words) => {
      words_list.push({ ...words.data() });
    });
    dispatch(loadWords(words_list));
  };
};
export const addWordsFB = (words_list) => {
  return async function (dispatch) {
    console.log(words_list);
    await addDoc(collection(db, "words"), words_list);
    // dispatch(addWords(words_list))
  };
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "words/LOAD": {
      return { ...state, words: action.words_list };
    }
    case "words/ADD": {
      const new_words = [...state.words, action.words_list];
      return { ...state, words: new_words };
    }
    default:
      return state;
  }
}
