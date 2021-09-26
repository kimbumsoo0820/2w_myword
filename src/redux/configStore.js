// Store의 기본 설정이라고 생각하면됨, combineReducers은 리듀서를 묶어주는 역할을 한다.
// Store를 만들기 위해 createStore가 필요하다.
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// 리듀서를 가져온다.
import word from "./modules/word";

const middlewares = [thunk];
// 리듀서를 다 묶은 것을 rootReducer라고 한다.
const rootReducer = combineReducers({ word });
const enhancer = applyMiddleware(...middlewares);

// rootReducer가지고 store를 만들어준다.
const store = createStore(rootReducer, enhancer);

export default store;
