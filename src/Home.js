import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import {
  border,
  width,
} from "../../SPARTA_REACT/bucket_list/node_modules/@mui/system";
import { useHistory } from "react-router-dom";

import { loadWordsFB } from "./redux/modules/word";

const Home = ({ list }) => {
  const word_list = useSelector((state) => state.word.word_list);
  const dispatch = useDispatch();
  console.log(word_list);
  const history = useHistory();

  React.useEffect(() => {
    dispatch(loadWordsFB());
  }, []);

  const _word_data = useSelector((state) => state.word.words);
  console.log(_word_data);

  return (
    <div>
      {_word_data &&
        _word_data.map((dictionary, index) => {
          return (
            <Cards key={index}>
              <Words>
                <p>단어</p>
                <p style={{ border: "1px solid #ddd" }}>{dictionary.word}</p>
                <p>설명</p>
                <p style={{ border: "1px solid #ddd" }}>
                  {dictionary.explanation}
                </p>
                <p>예시</p>
                <p
                  style={{ border: "1px solid #ddd", color: "lightsteelblue" }}
                >
                  {dictionary.ex}
                </p>
              </Words>
            </Cards>
          );
        })}
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
  margin: 0;
  margin: 20px;
`;

const Cards = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
`;
export default Home;
