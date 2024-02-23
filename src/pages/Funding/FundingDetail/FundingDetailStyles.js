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

/* 로고 */
export const Logo = styled.h1`
  font-size: 30px;
  /* font-weight: 700; */
  color: ${theme.white};
`;

/* 다용도 P 태그 */
export const P = styled.p`
  padding-top: ${(props) => props.pt};
  padding-bottom: ${(props) => props.pb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
  color: ${(props) => props.color};
  margin-top: ${(props) => props.mt};
  margin-right: ${(props) => props.mr};
  background-color: ${(props) => props.bc};
  border-radius: ${(props) => props.br};
  padding: ${(props) => props.p};
  align-items: center;
  border: none;
`;

/* 다용도 버튼 */
export const Button = styled.button`
  justify-content: center;
  align-items: center;
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  background-color: ${(props) => props.bc};
  border-radius: 7px;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fs};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  margin-left: ${(props) => props.ml};
  margin-right: ${(props) => props.mr};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  &:hover {
    color: ${theme.white};
    background-color: ${theme.primary};
    cursor: pointer;
  }
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

/* 네브바 영역 */
export const NavbarDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`;

// 바디 영역
export const Body = styled.div`
  height: auto;
`;

export const BannerImgDiv = styled.div`
  position: relative; /* 상대 위치 설정 */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 15px;
  padding-right: 20px;
`;

export const GiftCoverImg = styled.img`
  width: 50%; /* 이미지의 너비를 50%로 설정하여 반쯤 걸쳐지도록 함 */
  max-width: 121.82px;
  /* border-radius: 0px 0px 20px 20px; */
  position: absolute; /* 절대 위치 지정 */
  top: 50%; /* 부모 요소의 중앙에 위치하도록 설정 */
  left: 50%; /* 부모 요소의 중앙에 위치하도록 설정 */
  transform: translate(-50%, -51%); /* 부모 요소의 중앙에 위치하도록 설정 */
  z-index: 1; /* 다른 내용 위에 렌더링되도록 z-index 설정 */
  /* border: 0.3px solid ${theme.gray4};
  box-shadow: 0px 3px 3px 0px ${theme.gray4}; */
`;

export const BannerImg = styled.img`
  width: 50%; /* 이미지의 너비를 50%로 설정하여 반쯤 걸쳐지도록 함 */
  max-width: 121.80px;
  height: 100%;
  max-height: 101.82px;
  border-radius: 0px 0px 20px 20px;
  position: absolute; /* 절대 위치 지정 */
  top: 50%; /* 부모 요소의 중앙에 위치하도록 설정 */
  left: 50%; /* 부모 요소의 중앙에 위치하도록 설정 */
  transform: translate(-50%, 12%); /* 부모 요소의 중앙에 위치하도록 설정 */
  z-index: 1; /* 다른 내용 위에 렌더링되도록 z-index 설정 */
  box-shadow: 2px 2px 5px 2px ${theme.black};
`;

export const IllustImg = styled.img`
  width: 100%;
  max-width: 76px;
  margin: 10px;
`;
export const NavigateDiv = styled.div`
  text-align: right;
  margin-right: 22px;
`;
export const NavigateBtn = styled.button`
  font-size: ${theme.detail};
  color: ${theme.white};
  margin-bottom: 7px;
`;

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const FundingDiv = styled.div`
  background-color: ${theme.white};
  border-radius: 20px;
  border: 0.3px solid ${theme.gray4};
  width: -webkit-fill-available; /* 사용 가능한 너비로 채움 */
  max-width: 390px; /* 최대 너비를 390px로 제한 */
  margin: 10px auto 0 auto;
  padding-bottom: ${(props) => props.pb};
  padding: ${(props) => props.p};

  @media screen and (max-width: 390px) {
    max-width: 100%; /* 최대 너비를 100%로 설정하여 가득 차게 함 */
  }
`;

export const MassageBtn = styled.button`
  display: flex;
  width: -webkit-fill-available;
  max-width: 390px;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${theme.gray5};
  padding-top: 15px;
  margin-top: 20px;
`;

export const FundingNewline = styled.div`
  width: 100%;
  height: 12px;
`;

export const ProgressBar = styled.div`
  width: 85%;
  height: 15px;
  background-color: ${theme.gray6};
  border-radius: 12px;
  font-size: 0.8rem;
  margin: 10px 30px 10px 30px;
  text-align: center;
  overflow: hidden;
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
`;

export const Progress = styled.div`
  width: ${(props) => props.width}%;
  height: 15px;
  padding: 0;
  text-align: center;
  background-color: ${theme.primary};
  border-radius: 15px;
  /* color: #111; */
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
`;

export const BetweenDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: -webkit-fill-available; /* 사용 가능한 너비로 채움 */
  max-width: 390px; /* 최대 너비를 390px로 제한 */
  margin: 0 auto; /* 가운데 정렬을 위해 margin을 auto로 설정 */
  /* padding: 0px 33px 0px 33px; */
  padding: 0px 33px 0px 33px;
  padding-top: ${(props) => props.pt};

  @media screen and (max-width: 390px) {
    max-width: 100%; /* 최대 너비를 100%로 설정하여 가득 차게 함 */
  }
`;

export const TogetherDiv = styled.div`
  background-color: ${(props) => props.bc};
  border-radius: 30px;
  border: 0.3px solid ${theme.gray4};
  box-shadow: 0px 5px 0px 0px ${theme.gray4};
  height: 130px;
  width: -webkit-fill-available; /* 사용 가능한 너비로 채움 */
  max-width: 390px; /* 최대 너비를 390px로 제한 */
  margin: 0 auto; /* 가운데 정렬을 위해 margin을 auto로 설정 */
  position: relative; /* 상대 위치 설정 */

  @media screen and (max-width: 390px) {
    max-width: 100%; /* 최대 너비를 100%로 설정하여 가득 차게 함 */
  }
`;

export const SponserDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 0px 0px 20px;
`;

// 네브바 영역
export const NamingDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MakerDiv = styled.div`
  border: 1.5px solid ${theme.primary};
  border-radius: 5px;
  color: ${theme.primary};
  font-size: ${theme.detail2};
  /* font-weight: 600; */
  padding: 2px 5px 1.5px 5px;
  margin-left: 7px;
`;

export const DdayDiv = styled.p`
  border-radius: 8px;
  color: ${theme.gray2};
  font-size: ${theme.detail};
  background-color: ${theme.gray6};
  font-weight: 600;
  padding: 4px 15px 4px 15px;
`;

export const FundingComment = styled.div`
  margin-top: ${(props) => props.mt};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
`;

export const CommentDiv = styled.div`
  justify-content: center;
  align-items: center;
  width: 290px; /* 최대 너비를 390px로 제한 */
  padding: 14px;
  border-radius: ${(props) => props.br};
  background-color: ${(props) => props.bc};
  color: ${theme.black};
  font-size: ${theme.detail};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
`;

export const SponserComment = styled.div`
  margin-top: ${(props) => props.mt};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
`;

export const GiftTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
`;

export const SponsorImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 100px;
  margin-top: 10px;
`;

export const SponsorDiv = styled.div`
  background-color: ${theme.primary};
  border-radius: 5px;
  color: ${theme.white};
  font-size: ${theme.detail2};
  /* font-weight: 600; */
  padding: 2px 5px 1.5px 5px;
  margin-left: 7px;
`;

export const FundingImg = styled.img`
  height: 48px;
  width: 48px;
  margin-left: ${(props) => props.ml};
  margin-bottom: ${(props) => props.mb};
`;

export const SponsorimgDiv = styled.div`
  padding-top: ${(props) => props.pt};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StartRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

export const FloatingBtn = styled.button`
  position: sticky;
  bottom: 25px;
  left: 50%;
  transform: translateX(-5.5%);
  margin-bottom: 10px;
  width: 350px;
  height: 48px;
  border-radius: 15px;
  background-color: ${theme.primary};
  color: ${theme.white};
  font-size: ${theme.body2};
  z-index: 1000;

  &:hover {
    background-color: ${theme.primaryFont};
  }

  @media screen and (max-width: 390px) {
    position: fixed;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 10px;
    width: 132px;
    height: 44px;
    border-radius: 24px;
    background-color: ${theme.primary};
    color: ${theme.white};
    font-size: ${theme.body2};
    z-index: 1000;

    &:hover {
      background-color: ${theme.primaryFont};
    }
  }
`;
