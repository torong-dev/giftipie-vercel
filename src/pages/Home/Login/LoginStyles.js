import styled from "styled-components";
import theme from "../../../styles/theme";

// 전체 컨테이너
export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  flex-wrap: wrap;
`;

// 왼쪽 컨테이너
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 100vh;
  padding: 20px;
  /* border: 1px solid lightgray; */
  margin-right: 100px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Logo = styled.h1`
  font-size: 24px;
  font-weight: 800;
`;

export const P = styled.p`
  padding-top: ${(props) => props.pt};
  padding-bottom: ${(props) => props.pb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
  color: ${(props) => props.color};
  display: flex;
  align-items: center;
`;

// 오른쪽 컨테이너
export const RightContainer = styled.div`
  position: relative;
  width: 442px;
  height: 100vh;
  /* border: 1px solid lightgray; */
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 442px) {
    width: 100%;
  }
`;

// 바디 영역
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 442px;
  height: 100vh;
  margin: 0 auto;
`;

export const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  width: 100%;
  max-width: 390px;
  color: white;
`;

export const BlankLine = styled.div`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
`;

export const LoginIconDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 30px;
  color: darkgray;
  width: 100%;
  max-width: 442px;
  padding: 20px;

  &:hover {
    color: gray;
    cursor: pointer;
  }
`;

export const LoginImg = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 50px;
`;

export const LoginInput = styled.input`
  width: 300px;
  height: 40px;
  font-size: 16px;
  padding-left: 10px;
  border-radius: 5px;
`;

export const LoginBtn = styled.button`
  width: 100%;
  max-width: 442px;
  height: 50px;
  font-size: 20px;
  margin-top: auto;
  margin-bottom: auto;
  background-color: ${theme.primary};
  transition: all 300ms ease-in-out;
  border-radius: 7px;

  &:hover {
    background-color: ${theme.secondary};
  }
`;

export const LoginHelpDiv = styled.div`
  width: 300px;
  height: 20px;
  font-size: 14px;
  margin-top: 10px;
  color: #f45757;
`;
