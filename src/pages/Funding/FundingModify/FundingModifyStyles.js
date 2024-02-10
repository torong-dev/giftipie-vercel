import styled from "styled-components";

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
  border: 1px solid lightgray;
  border-radius: 8px;
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
  align-items: center;
`;

export const Button = styled.button`
  justify-content: center;
  align-items: center;
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  padding: ${(props) => props.p};
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

// 오른쪽 컨테이너
export const RightContainer = styled.div`
  position: relative;
  width: 442px;
  border: 1px solid lightgray;
  height: 100vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 442px) {
    width: 100%;
  }
`;

// 네브바 영역
export const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`;

export const NavbarBtn = styled.button`
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
`;

// 바디 영역
export const Body = styled.div`
  font-size: 24px;
  font-weight: 800;
  height: auto;
`;

export const FundingDiv = styled.div`
  justify-content: center;
  width: 100%;
  max-width: 442px;
  height: auto;
  padding: 30px;
`;

export const ProducImgtDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SponsorDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SponsorComment = styled.div`
  margin-top: ${(props) => props.mt};
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  &:hover {
    cursor: ${(props) => props.pointer};
  }
`;

export const FundingProductImg = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 4px;
  margin-top: 10px;
`;

export const FundingImg = styled.img`
  max-width: 100px;
  max-height: 100px;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  margin-top: 18px;
`;
export const ImgText = styled.h1`
  /* position: absolute; 핵심코드 */
  top: 47%; // 핵심코드
  right: 25%; //핵심코드 */
  transform: translate( 15%, -130%); // 핵심코드
  color: gray;
`
export const InputTag = styled.input`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  background-color: #eae7de;
  border-radius: 4px;
  border: none;
  margin-left: ${(props) => props.ml};
  margin-bottom: ${(props) => props.mb};
  padding-left: ${(props) => props.pl};
  padding-top: ${(props) => props.pt};
  padding-bottom: ${(props) => props.pb};
  font-weight: 500;
  font-size: 12px;
  justify-content: start;
  align-items: start;
`;
export const RadioInput = styled.input`
  margin-bottom: ${(props) => props.mb};
  accent-color: black;
`;

export const FundingNewline = styled.div`
  width: 100%;
  height: 12px;
`;

export const TogetherDiv = styled.div`
  margin-top: 30px;
  width: 442px;
  height: 45px;
  background-color: ${(props) => props.bc};
  color: ${(props) => props.color};
  justify-content: center;
  align-items: center;
`;
