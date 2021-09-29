import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";

import {
  loadWordsFB,
  updateWords,
  deleteWords,
  updateWordsFB,
  deleteWordsFB,
} from "./redux/modules/word";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalWord, setModalWord] = useState({
    id: "",
    word: "",
    explanation: "",
    ex: "",
  });
  let page = 1;
  let data_list = [];

  //   console.log(modalWord);

  // https://ko-de-dev-green.tistory.com/18   useeffect 에 관한 설명
  React.useEffect(() => {
    dispatch(loadWordsFB());
  }, []);

  const _word_data = useSelector((state) => state.word.words); // state.word(파일이름).words(word.js에 있는 리덕스 저장소에 있는 배열 이름)

  window.onscroll = function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      page += 1;
      console.log(page);
    }
  };

  // for (let i = 0; i < page * 10; i++) {
  //     const obj = {};
  //     data_list[i] = _word_data[i];
  //   }

  return (
    <div>
      {_word_data &&
        _word_data.map((dictionary, index) => {
          return (
            <Cards key={index}>
              <Words
                onClick={() => {
                  setModalIsOpen(true);
                  setModalWord(dictionary);
                }}
              >
                <Text_title>단어</Text_title>
                <Text_Word style={{}}>{dictionary.word}</Text_Word>
                <Text_title>설명</Text_title>
                <Text_p style={{}}>{dictionary.explanation}</Text_p>
                <Text_title>예시</Text_title>
                <Text_p style={{ color: "lightsteelblue" }}>
                  {dictionary.ex}
                </Text_p>
              </Words>
            </Cards>
          );
        })}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(209, 209, 209,0.7) ",
          },
          content: {
            margin: "auto",
            width: "500px",
            height: "600px",
            justifyContent: "center",
            alignContent: "center",
            overflow: "auto",
          },
        }}
      >
        <h2>Detail of My Dictionary</h2>
        <Text_title2>단어</Text_title2>
        <h2 style={{}}>{modalWord.word}</h2>
        <Text_title2>설명</Text_title2>
        <p style={{}}>{modalWord.explanation}</p>
        <Text_title2>예시</Text_title2>
        <p style={{}}>{modalWord.ex}</p>

        <Modal_button
          onClick={() => {
            setModalIsOpen(false);
          }}
        >
          뒤로 가기
        </Modal_button>

        <Modal_button
          onClick={() => {
            dispatch(deleteWordsFB(modalWord.id));
            setModalIsOpen(false);
            // window.location.reload();
          }}
        >
          삭제 하기
        </Modal_button>
      </Modal>

      <AddButton
        onClick={() => {
          history.push("/add");
        }}
      >
        +
      </AddButton>
    </div>
  );
};

const AddButton = styled.button`
  width: 60px;
  height: 60px;
  background-color: #a673ff;
  border-radius: 100px;
  border: 0px;
  color: #fff;
  font-size: 83px;
  position: fixed;
  display: flex;
  align-items: center;
  right: 8%;
  bottom: 15%;
`;

const Words = styled.div`
  width: 200px;
  background-color: lightyellow;
  border: 1px solid #ddd;
  padding: 10px;
  height: 250px;
  margin: 20px;
  cursor: pointer;
`;

const Cards = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
`;

const Text_Word = styled.h2`
  overflow: hidden;
  width: 195px;
  height: 27px;
  padding: 2px;
`;

const Text_p = styled.p`
  overflow: hidden;
  width: 195px;
  height: 23px;
  padding: 2px;
`;

const Text_title = styled.p`
  font-size: 11px;
`;
const Text_title2 = styled.p`
  font-size: 11px;
  color: #a673ff;
`;

const Modal_button = styled.button`
  padding: 8px 24px;
  margin-top: 20px;
  background-color: #a673ff;
  border-radius: 30px;
  border: skyblue;
  color: white;
`;
export default Home;
