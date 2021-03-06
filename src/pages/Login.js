import React from "react";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { actionCreators as userActions } from "../redux/modules/user";
import { history } from "../redux/configureStore";

import Main from "./Main";
import Signup from "./Signup";
// import { KAKAO_AUTH_URL } from "../shared/Auth";

import styled from "styled-components";
import { Button, Div, Image, Input, Text } from "../components/ui";

const Login = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  //모달
  const [modal, setModal] = React.useState(false);
  // const _modal = props.modal;
  // console.log(_modal);
  // const isModal = props.setModal;
  // console.log(isModal);
  // const [_isModal, setIsModal] = useState(isModal === true);
  // // const [isOpen, setIsOpen] = useState(false);
  // const outModal = React.useRef();
  // const closeModal = (e) => {
  //   if (_modal && outModal.current === e.target) {
  //     // setIsModal(!_modal);
  //     return _modal === false;
  //   }
  // };

  //이메일형식 확인
  const isId = (email) => {
    let pattern =
      /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-zA]([-_.0-9a-zA-Z])*.([a-zA-Z])/;
    return pattern.test(email); // 맞으면 true, 틀리면 false반환
  };

  // 비밀번호형식 확인
  const isPwd = (pwd) => {
    let pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return pattern.test(pwd); // 맞으면 true, 틀리면 false반환
  };

  //로그인함수
  const login = () => {
    if (id === "" || pwd === "") {
      window.alert("빈칸을 입력해주세요.");
      return;
    }

    if (!isId(id)) {
      window.alert("잘못된 이메일 형식입니다.");
      return;
    }

    if (!isPwd(pwd)) {
      window.alert(
        "비밀번호는 최소 8자, 하나 이상의 문자와 숫자로 입력해주세요."
      );
      return;
    }

    dispatch(userActions.loginDB(id, pwd));
  };

  //카카오
  const REST_API_KEY = "ebb64769e9ae562700e77df6554c840d";
  const REDIRECT_URI =
    "http://inburst.shop.s3-website.ap-northeast-2.amazonaws.com/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <React.Fragment>
      <Div
        modalContainer
        // ref={outModal}
        _onClick={(e) => {
          // closeModal(e);
        }}
      >
        <Div
          modalBox
          _onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {/* <Button
            is_float
            _onClick={(e) => {
              e.preventDefault();
              setModal(true);
            }}
          >
            X
          </Button>
          {modal ? <Main /> : null} */}
          <Div
            width="500px"
            height="680px"
            margin="70px auto"
            padding="32px 0px"
            textCenter
          >
            <Image
              src="https://static.velog.io/static/media/undraw_joyride_hnno.fae6b95e.svg"
              alt="kakao"
              width="100%"
              height="490px"
              size="cover"
              position="center"
            />
          </Div>
          <Div
            width="350px"
            height="680px"
            margin="70px auto"
            padding="32px 0px"
            textCenter
          >
            <Div
              center
              height="400px"
              margin="12px 0px"
              padding="10px 0px"
              border="1px solid lightgrey"
            >
              <Div center height="100px" margin="0px 0px 10px 0px">
                <Text font="FiraMono" size="2rem" bold>
                  Velog Login
                </Text>
              </Div>
              <Div height="300px">
                <Input
                  repeat
                  type="text"
                  placeholder="아이디"
                  _onChange={(e) => {
                    setId(e.target.value);
                  }}
                />
                <Input
                  repeat
                  type="password"
                  placeholder="비밀번호"
                  _onChange={(e) => {
                    setPwd(e.target.value);
                  }}
                />
                <Button
                  width="300px"
                  lineHeight="35px"
                  margin="12px"
                  backgroundColor="#63e6be"
                  _onClick={login}
                >
                  로그인
                </Button>
                <Line />
                <Div
                  row
                  width="300px"
                  height="35px"
                  margin="20px auto"
                  borderRadius="5px"
                >
                  <Image
                    src="https://t1.daumcdn.net/cfile/tistory/99792D425D0895002A"
                    alt="kakao"
                    width="20px"
                    height="20px"
                    size="cover"
                    position="center"
                    radius="3px"
                  />
                  <Button margin="20px 10px" size="0.9em">
                    <a href={KAKAO_AUTH_URL}>KakaoTalk으로 로그인</a>
                  </Button>
                </Div>
              </Div>
            </Div>
            <Div border="1px solid lightgrey" margin="12px 0px">
              <Text display="inline-block" size="0.9em">
                계정이 없으신가요?
              </Text>
              <Button
                width="70px"
                height="40px"
                lineHeight="40px"
                margin="10px 5px"
                bold
                size="0.9em"
                color="#20c997"
                _onClick={(e) => {
                  setModal(true);
                }}
              >
                가입하기
              </Button>
              {modal ? <Signup /> : null}
            </Div>
          </Div>
        </Div>
      </Div>
    </React.Fragment>
  );
};

export default Login;

const Line = styled.hr`
  margin: 10px 25px;
  border: 1px dotted lightgrey;
`;
