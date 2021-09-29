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
import { firestore, query, orderBy, limit } from "../../firebase";
const LOAD = "words/LOAD";
const ADD = "words/ADD";
const UPDATE = "words/UPDATE";
const DELETE = "words/DELETE";
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
export const updateWords = (words_id) => {
  return { type: UPDATE, words_id };
};
export const deleteWords = (words_id) => {
  //   console.log("지울 단어", words_id);
  return { type: DELETE, words_id };
};

// 미들웨어
export const loadWordsFB = () => {
  return async function (dispatch) {
    const words_data = await getDocs(collection(db, "words"));

    let words_list = [];
    words_data.forEach((words) => {
      words_list.push({ id: words.id, ...words.data() });
    });
    dispatch(loadWords(words_list));
  };
};
export const addWordsFB = (words_list) => {
  return async function (dispatch) {
    // console.log(words_list);
    await addDoc(collection(db, "words"), words_list);
    // dispatch(addWords(words_list))
  };
};
export const updateWordsFB = (words_list, words_id) => {
  return function (dispatch) {
    // console.log(words_id);
  };
};

export const deleteWordsFB = (words_id) => {
  return async function (dispatch) {
    const docRef = doc(db, "words", words_id);
    await deleteDoc(docRef);
    dispatch(deleteWords(words_id));
  };
};

//리듀서
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "words/LOAD": {
      return { ...state, words: action.words_list };
    }
    case "words/ADD": {
      const new_words = [...state.words, action.words_list];
      return { ...state, words: new_words };
    }
    case "words/DELETE": {
      //   console.log(state, action);
      const result = state.words.filter((word) => word.id !== action.words_id);
      return { ...state, words: result };
    }

    default:
      return state;
  }
}
