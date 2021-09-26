import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//firebase
import { db } from "./firebase";
import { collection, addDoc } from "@firebase/firestore";
import { addWords, addWordsFB } from "./redux/modules/word";
import styled from "styled-components";

const Add = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const word_ref = React.useRef(null);
  const explanation_ref = React.useRef(null);
  const ex_ref = React.useRef(null);
  return (
    <div>
      <p style={{ marginTop: "55px" }}>단어 이름 </p>
      <Inputs ref={word_ref} type="text" />
      <p>단어 설명 </p>
      <Inputs ref={explanation_ref} type="text" />
      <p>단어 예시 </p>
      <Inputs ref={ex_ref} type="text" />

      <button
        onClick={() => {
          dispatch(addWords(word_ref.current.value));
          dispatch(
            addWordsFB({
              word: word_ref.current.value,
              explanation: explanation_ref.current.value,
              ex: ex_ref.current.value,
            })
          );

          history.push("/");
        }}
        style={{
          padding: "8px 24px",
          marginTop: "20px",
          backgroundColor: " #a673ff",
          borderRadius: "30px",
          border: "skyblue",
          color: "white",
        }}
      >
        추가하기
      </button>
    </div>
  );
};

const Inputs = styled.input`
  padding: 10px;
  margin: 30px 0px;
  border: 1px solid #a673ff;
  border-radius: 30px;
  width: 100%;
`;

export default Add;
