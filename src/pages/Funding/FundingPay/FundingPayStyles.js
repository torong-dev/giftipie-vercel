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

/* 왼쪽 컨테이너 */
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding-top: ${(props) => props.pt};

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const LeftImgContainer = styled.div`
  position: relative; /*상대 위치 지정*/
  //width: 300px; /* 이미지 너비 */
  height: 200px; /* 이미지 높이 */
  padding-left: 100px; /* 이미지 왼쪽 간격 조정 */
  justify-content: space-between;
`;

export const LeftLogoTextIcon = styled.img`
  height: 40px;
  position: absolute; /* 절대 위치 지정 */
  bottom: 20px; /* 아래쪽 위치 조정 */
  left: 30px; /* 왼쪽 위치 조정 */
`;

export const BubbleImg = styled.img`
  position: absolute; /* 절대 위치 지정 */
  top: 0; /* 위쪽 정렬 */
  left: 368px; /* 왼쪽 정렬 */
  width: 290px; /* 부모 요소에 대한 상대적인 너비 */
  height: 230px; /* 부모 요소에 대한 상대적인 높이 */
`;

export const LeftRowdiv = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items: center; */

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

// 네브바 영역
export const NavbarDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 70px;
  padding-left: 20px;
`;

/* 오른쪽 컨테이너 */
export const RightContainer = styled.div`
  position: relative;
  width: -webkit-fill-available; /* 사용 가능한 너비로 채움 */
  max-width: 390px; /* 최대 너비를 390px로 제한 */
  /* border: 1px solid lightgray; */
  height: 100vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 390px) {
    max-width: 100%; /* 최대 너비를 100%로 설정하여 가득 차게 함 */
  }
`;

// 바디 영역
export const Body = styled.div`
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
  position: fixed; //상대 위치 설정
  height: 100vh;
  max-height: -webkit-fill-available; //사용 가능한 너비로 채움

  @media screen and (max-width: 390px) {
    max-width: 100%; /* 최대 너비를 100%로 설정하여 가득 차게 함 */
  }
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  margin-top: 50px;
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
  background-color: ${(props) => (props.disabled ? "#FFFFFF" : "#fae101")};
  border: 2px solid ${(props) => (props.disabled ? "#808080" : "#fae101")};
  border-radius: 20px;
  font-size: 19px;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: ${(props) => props.mb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  &:hover {
    background-color: ${(props) => (props.disabled ? "#FFFFFF" : "#fae102")};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  }
`;

export const KakaoPayLogo = styled.img`
  width: 28px;
  margin-right: 10px;
`;
