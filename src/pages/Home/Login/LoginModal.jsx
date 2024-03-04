import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { googleLogin, kakaoLogin } from "../../../redux/authSlice";
import theme from "../../../styles/theme";
import {
  getGoogleLogin,
  getKakaoLogin,
  getKakaoAuthorizationCode,
} from "../../../apis/auth";
import {
  ModalContainer,
  Background,
  IoCloseDiv,
  LoginModalImg,
  P,
  LoginModalBtn,
  TxtDiv,
  KakaoImg,
  InfoDiv,
} from "./LoginModalStyles";

const LoginModal = ({ closeModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // 구글 로그인 API
  const GoogleLogin = async () => {
    try {
      await getGoogleLogin();

      dispatch(googleLogin()); // Redux 액션 디스패치
      navigate("/");
    } catch (error) {
      console.error("구글 로그인 오류: ", error);
    }
  };

  // 카카오 로그인 API
  const KakaoLogin = async () => {
    const link = process.env.REACT_APP_KAKAO_URL;
    window.location.href = link;
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const params = new URLSearchParams(location.search);
        const code = await getKakaoAuthorizationCode();
        console.log("code값", code);

        if (params.has("code")) {
          const code = params.get("code");
          console.log("params의 code값", code);
          await getKakaoLogin(code);

          dispatch(kakaoLogin()); // Redux 액션 디스패치
          navigate("/");
        }
      } catch (error) {
        console.error("카카오 로그인 오류: ", error);
      }
    };

    getData();
  }, [location.search, dispatch, navigate]);

  return (
    <>
      <Background onClick={closeModal} />
      <ModalContainer>
        <IoCloseDiv onClick={closeModal}>
          <IoClose />
        </IoCloseDiv>
        <LoginModalImg
          src="/imgs/Login/heart.svg"
          alt="heart"
          w="110px"
          h="110px"
        />
        <TxtDiv>
          <P fs={theme.title} fw="600" color={theme.black}>
            Giftipie에서
          </P>
          <P fs={theme.title} fw="600" color={theme.primary}>
            정말 원하는 선물{" "}
            <span style={{ color: theme.black, fontSize: theme.title }}>
              을
            </span>
          </P>
          <P fs={theme.title} fw="600" color={theme.black}>
            주고받아요
          </P>
        </TxtDiv>
        <LoginModalBtn
          onClick={() => navigate("/signup")}
          bc={theme.primary}
          color={theme.white}
        >
          1분 만에 가입하기
        </LoginModalBtn>
        <P fs={theme.body2} color={theme.gray3}>
          또는
        </P>
        <LoginModalBtn
          onClick={GoogleLogin}
          bc={theme.gray6}
          color={theme.black}
        >
          <KakaoImg src="/imgs/Login/google.svg" alt="google" />
          구글로 계속하기
        </LoginModalBtn>
        <LoginModalBtn onClick={KakaoLogin} bc="#FEE500" color={theme.black}>
          <KakaoImg src="/imgs/Login/kakao.svg" alt="kakao" />
          카카오로 계속하기
        </LoginModalBtn>
        <InfoDiv>
          <P fs={theme.body2} color={theme.gray3}>
            이미 계정이 있으신가요?&nbsp;
          </P>
          <P
            onClick={() => navigate("/login")}
            cursor="pointer"
            fs={theme.body2}
            color={theme.primary}
          >
            로그인하기
          </P>
        </InfoDiv>
      </ModalContainer>
    </>
  );
};

export default LoginModal;
