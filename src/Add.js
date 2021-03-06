import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

//firebase
import { addWords, addWordsFB } from "./redux/modules/word";
import styled from "styled-components";

const Add = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const word_ref = React.useRef(null);
  const explanation_ref = React.useRef(null);
  const ex_ref = React.useRef(null);

  let [inputWord, setinputWord] = useState("");
  let [inputexplanation, setinputexplanation] = useState("");
  let [inputex, setinputex] = useState("");

  function add() {
    console.log(inputWord, inputexplanation, inputex);

    if ((inputWord == "") | (inputexplanation == "") | (inputex == "")) {
      window.alert("값을 모두 입력해 주세요.");
    } else {
      dispatch(addWords(word_ref.current.value));
      dispatch(
        addWordsFB({
          word: word_ref.current.value,
          explanation: explanation_ref.current.value,
          ex: ex_ref.current.value,
        })
      );
      history.push("/");
    }
  }

  return (
    <div>
      <p style={{ marginTop: "55px" }}>단어 이름 </p>
      <Inputs
        ref={word_ref}
        type="text"
        onChange={(e) => {
          setinputWord(e.target.value);
        }}
      />
      <p>단어 설명 </p>
      <Inputs
        ref={explanation_ref}
        type="text"
        onChange={(e) => {
          setinputexplanation(e.target.value);
        }}
      />
      <p>단어 예시 </p>
      <Inputs
        ref={ex_ref}
        type="text"
        onChange={(e) => {
          setinputex(e.target.value);
        }}
      />

      <Button_ox
        onClick={() => {
          add();
        }}
      >
        추가하기
      </Button_ox>
      <Button_ox
        onClick={() => {
          history.push("/");
        }}
        style={{ marginLeft: "20px" }}
      >
        뒤로가기
      </Button_ox>
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

const Button_ox = styled.button`
  padding: 8px 24px;
  margin-top: 20px;
  background-color: #a673ff;
  border-radius: 30px;
  border: skyblue;
  color: white;
`;

export default Add;
