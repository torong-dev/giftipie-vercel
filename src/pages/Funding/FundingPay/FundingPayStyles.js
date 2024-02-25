import styled from "styled-components";
import theme from "../../../styles/theme";

/* 전체 컨테이너 */
export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  flex-wrap: wrap;
`;

/* 왼쪽 컨테이너 */
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding-top: ${(props) => props.pt};

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const BubbleTxt = styled.div`
  position: absolute;
  bottom: 208px;
  left: 26px;
  padding: 100px 0 0 300px;
`;

export const LeftImgContainer = styled.div`
  position: relative;
  height: 0;
  padding-left: 150px;
`;

export const LeftLogoTextIcon = styled.img`
  position: absolute;
  height: 40px;
  bottom: 20px;
  left: 30px;
  cursor: pointer;
`;

export const BubbleImg = styled.img`
  position: absolute;
  bottom: 130px;
  right: 130px;
  height: 200px;
`;

export const LeftPieImg = styled.img`
  position: absolute;
  width: 250px;
  right: 0;
  bottom: -100px;
`;

export const LeftRowdiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding-top: ${(props) => props.pt};
  margin-top: ${(props) => props.mt};
  padding-bottom: ${(props) => props.pb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  margin-right: ${(props) => props.mr};
  margin-left: ${(props) => props.ml};
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
  color: ${(props) => props.color};
  background-color: ${(props) => props.bc};
  border-radius: ${(props) => props.br};
  padding: ${(props) => props.p};
  border: none;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 30px;
`;

// 입력한 영역
export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
  max-width: 390px;
  border-radius: 10px;
  margin-top: ${(props) => props.mt};
  border: 0.3px solid ${theme.gray5};
  margin-bottom: 8px;
  &:hover {
    border: 0.5px solid ${theme.gray3};
  }
`;

export const InputSpan = styled.span`
  padding-top: 10px;
  padding-bottom: 5px;
  padding-left: 10px;
  font-size: ${theme.detail2};
  color: ${theme.gray2};
`;

export const InputInput = styled.input`
  border: none;
  width: 95%;
  padding-left: 10px;
  padding-bottom: 10px;
  font-weight: 500;
  font-size: ${theme.body1};
  color: ${theme.black};
  border-radius: 10px;
  justify-content: start;
  align-items: start;
  font-family: "Pretendard", sans-serif;
`;

export const Textarea = styled.textarea`
  width: 98%;
  height: 128px;
  outline: none;
  border: none;
  resize: none;
  border-radius: 10px;
  margin-bottom: 10px;
  padding-left: 10px;
  font-size: ${theme.body1};
  color: ${theme.black};
  justify-content: start;
  align-items: start;
`;

export const ProfileImageRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  margin-bottom: ${(props) => props.mb};
`;

export const ProfileImg = styled.img`
  height: 62px;
  width: 62px;
  border-radius: 3px;
  margin-right: ${(props) => props.mr};
`;

export const LeftImg = styled.img`
  margin-top: ${(props) => props.mt};
  margin-right: ${(props) => props.mr};
  padding-right: ${(props) => props.pr};
  padding-left: ${(props) => props.pl};
  width: ${(props) => props.w};
  height: ${(props) => props.h};
`;

export const Leftcolumndiv = styled.div`
  flex-direction: column;
  margin-left: ${(props) => props.ml};
`;

export const IpadLoveImg = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: ${(props) => props.w};
  height: ${(props) => props.h};
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
  background-color: ${(props) => props.bc};
  margin-top: ${(props) => props.mt};
  margin-right: ${(props) => props.mr};
  border-radius: ${(props) => props.br};
  padding: ${(props) => props.p};
  align-items: center;
  border: none;
`;

export const Button = styled.button`
  justify-content: center;
  align-items: center;
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  background-color: ${(props) => props.bc};
  border-radius: 7px;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fs};
  font-weight: 600;
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  &:hover {
    color: white;
    background-color: black;
    cursor: pointer;
  }
`;

/* 네브바 영역 */
export const NavbarDiv = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  z-index: 9;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 10px 10px 4px 10px;
  background-color: ${theme.gray1};
`;

/* 오른쪽 컨테이너 */
export const RightContainer = styled.div`
  position: relative;
  width: -webkit-fill-available;
  height: calc(var(--vh, 1vh) * 100);
  max-width: 390px;
  margin: 0 10px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  /* 모바일뷰 */
  /* @media screen and (max-width: 390px) {
    max-width: 100%;
    height: calc(var(--vh, 1vh) * 100);
  } */

  /* 태블릿뷰는 추후에 적용예정 */
  /* @media screen and (max-width: 1024px) {
    max-width: 100%;
  } */
`;

// 바디 영역
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 390px;
  height: auto;
`;

export const FundingDiv = styled.div`
  justify-content: center;
  max-width: 390px; /* 최대 너비를 390px로 제한 */
  height: auto;
  width: -webkit-fill-available; /* 사용 가능한 너비로 채움 */
  margin: 0 auto; /* 가운데 정렬을 위해 margin을 auto로 설정 */

  @media screen and (max-width: 390px) {
    max-width: 100%; /* 최대 너비를 100%로 설정하여 가득 차게 함 */
  }
`;

export const SponserDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const SponserMoney = styled.div`
  margin-top: ${(props) => props.mt};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FundingNewline = styled.div`
  width: 100%;
  height: 12px;
`;

export const TogetherDiv = styled.div`
  background-color: ${(props) => props.bc};
  border-radius: ${(props) => props.br};
  width: -webkit-fill-available; /* 사용 가능한 너비로 채움 */
  max-width: 390px; /* 최대 너비를 390px로 제한 */
  margin: 0 auto; /* 가운데 정렬을 위해 margin을 auto로 설정 */
  margin-bottom: ${(props) => props.mb};
  padding: 20px;
  position: relative; //상대 위치 설정

  @media screen and (max-width: 390px) {
    max-width: 100%; /* 최대 너비를 100%로 설정하여 가득 차게 함 */
  }
`;

export const PayDiv = styled.div`
  background-color: ${(props) => props.bc};
  border-radius: ${(props) => props.br};
  width: -webkit-fill-available; /* 사용 가능한 너비로 채움 */
  max-width: 390px; /* 최대 너비를 390px로 제한 */
  margin: 0 auto; /* 가운데 정렬을 위해 margin을 auto로 설정 */
  margin-bottom: ${(props) => props.mb};
  padding: 20px;
  /* position: fixed;  */
  /* height: 100vh; */
  /* max-height: -webkit-fill-available;  */

  @media screen and (max-width: 390px) {
    max-width: 100%; /* 최대 너비를 100%로 설정하여 가득 차게 함 */
  }
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  margin-top: 25px;
  margin-right: 15px;
  width: 25px;
  height: 25px;
  accent-color: ${theme.primary};
  border: 2px solid ${(props) => (props.checked ? "#FFFFFF" : "#fae101")};
  background-color: ${(props) => (props.checked ? "#808080" : "#fae101")};
`;

// 카카오버튼
export const KakaoButton = styled.button`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #fae101; /* 변경됨 */
  border: none; /* 변경됨 */
  border-radius: 20px;
  font-size: 19px;
  font-weight: 600;
  margin-top: 13px;
  margin-bottom: 15px;
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  &:hover {
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  }
`;

export const KakaoPayLogo = styled.img`
  width: 50px;
  margin-right: 7px;
`;
