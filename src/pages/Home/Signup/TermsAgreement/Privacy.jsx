import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import theme from "../../../../styles/theme";
import {
  MainContainer,
  LeftContainer,
  LeftLogoTextIcon,
  LeftImg,
  LeftPieImg,
  LeftRowdiv,
  LeftContent,
  Leftcolumndiv,
  LeftImgContainer,
  BubbleImg,
  IpadLoveImg,
  P,
  RightContainer,
  NavbarDiv,
  FieldContainer,
  Body,
  IconDiv,
} from "../SignupStyles";

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <LeftContainer>
        <LeftContainer>
          <LeftImgContainer>
            <BubbleImg src="/imgs/Home/speech-bubble.png" />
            <LeftLogoTextIcon
              onClick={() => navigate("/")}
              src="/imgs/Common/giftipie.png"
            />
            <LeftPieImg src="/imgs/Home/pie-hi.png" />
          </LeftImgContainer>
          <LeftRowdiv ml="30px">
            <LeftRowdiv
              color={theme.gray1}
              mr="10px"
              bc={theme.primary}
              br="25px"
              p="8px"
            >
              <LeftImg
                src="/imgs/Home/giftbox-red.png"
                w="30px"
                h="25px"
                mr="10px"
                pl="10px"
              />
              <P fs="20px" fw="700" pr="10px" color={theme.black}>
                정말 원하는 선물
              </P>
            </LeftRowdiv>
            <P fs="20px" fw="700" color={theme.white}>
              을 주고 받아요!
            </P>
          </LeftRowdiv>
          <LeftContent>
            <Leftcolumndiv ml="30px">
              <P fs="16px" fw="500" pb="5px" pr="250px" color={theme.gray4}>
                지금은 유저테스트 진행 중 입니다. <br />
                6명의 개발자와 1명의 디자이너가 함께 개발하고 있습니다.
              </P>
            </Leftcolumndiv>
          </LeftContent>
        </LeftContainer>
        <LeftRowdiv ml="30px"></LeftRowdiv>
        <IpadLoveImg src="/imgs/Home/pie-ipad.png" w="300px" />
      </LeftContainer>

      <RightContainer>
        <NavbarDiv>
          <IconDiv>
            <FaAngleLeft onClick={() => navigate("/signup")} />
          </IconDiv>
          <P fs={theme.body2} color={theme.white}>
            개인정보 처리방침
          </P>
        </NavbarDiv>
        <Body>
          <FieldContainer>
            <P fs={theme.body2} p="10px">
              Giftipie(이하 "기프티파이")는 이용자(이하 "회원" 또는 "이용자")의
              동의를 기반으로 개인정보를 수집·이용·제공하고 있으며, 「정보통신망
              이용촉진 및 정보보호에 관한 법률」(이하 "정보통신망법")을 준수하여
              이용자의 개인정보 자기결정권을 적극적으로 보장합니다. 본
              「개인정보 처리방침」을 통하여 이용자는 자신의 개인정보가 어떠한
              용도와 방식으로 취급되고 있으며, 기프티파이가 개인정보 보호를 위해
              어떠한 조치들을 취하고 있는지 알 수 있습니다.
            </P>
            <P fs={theme.body2} p="10px">
              「개인정보 처리방침」이란 이용자의 소중한 개인정보를 보호하여
              안심하고 서비스를 이용할 수 있도록 기프티파이가 서비스를 운영함에
              있어 준수해야 할 지침을 의미합니다.
            </P>
            <P fs={theme.body2} fw="600" p="10px">
              제 1조 개인정보 수집범위 및 방법
            </P>
            <P fs={theme.body2} p="10px">
              기프티파이는 이용자들에게 다양한 서비스를 제공하고 이용자들의 계정
              생성을 돕기 위해 개인 정보를 제공받고 이를 활용하여야 합니다.
              이용자는 회원가입을 하지 않아도 일부 서비스를 회원과 동일하게
              이용할 수 있고, 회원가입을 통해 더욱 다양한 서비스를 제공받을 수
              있습니다. 이용자가 회원가입을 할 경우, 기프티파이는 서비스 이용을
              위해 필요한 최소한의 개인정보를 수집합니다.
            </P>
            <P fs={theme.body2} p="10px">
              회원가입 및 로그인 시점에 기프티파이는 이용자로부터 아래와 같은
              개인정보를 수집합니다.
            </P>
            <P fs={theme.body2} p="10px">
              1. 일반 회원
              <br />* 필수 정보: 사이트 가입 및 로그인(이메일, 닉네임, 비밀번호)
              / 카카오톡 계정 가입 시 자동 수집되는 정보
              <br />* 필수 정보란 서비스의 본질적 기능을 수행하기 위해 필요한
              정보입니다.
            </P>
            <P fs={theme.body2} p="10px">
              2. 펀딩 결제 회원
              <br />
              카카오페이 온라인 결제 이용 과정에서 아래와 같은 정보가 개인정보
              수탁자(결제 대행사)에 의해 수집될 수 있습니다.
              <br />* 카카오페이 온라인 결제 이용 시: 테스트 결제를 위해
              자동으로 수집되는 정보
            </P>
            <P fs={theme.body2} p="10px">
              3. 기타 <br />이 외에 서비스 이용과정에서 아래와 같은 정보가
              자동으로 생성되어 수집될 수 있습니다. * 단말기정보, 접속IP주소,
              쿠키, 방문일시, 테스트 결제 정보 및 기록, 서비스 이용 기록 서비스
              이용과정에서 이용자로부터 수집하는 개인정보는 서비스에 따라 차이가
              있을 수 있습니다.
            </P>
            <P fs={theme.body2} p="10px" bc={theme.white}>
              기프티파이는 아래의 방법을 통해 개인정보를 수집합니다
              <br />
              1. 회원가입 및 서비스 이용 과정에서 이용자가 개인정보 수집에 대해
              동의를 하고 직접 정보를 입력하는 경우, 해당 개인정보를 수집합니다.
              <br />
              2. 채널톡을 통한 상담 과정에서 이용자의 개인정보가 수집될 수
              있습니다.
              <br />
              3. 기프티파이와 제휴한 외부 기업이나 단체로부터 개인정보를
              제공받을 수 있으며, 이러한 경우에는 정보통신망법에 따라 제휴사에서
              이용자에게 개인정보 제공 동의 등을 받은 후에 기프티파이에
              제공합니다.
              <br />
              4. 기기정보와 같은 생성정보는 PC웹, 모바일 웹/앱 이용 과정에서
              자동으로 생성되어 수집될 수 있습니다.
            </P>
            <P fs={theme.body2} fw="600" p="10px 115.4px" bc={theme.white}>
              제 2조 개인정보 처리 및 보유
            </P>
            <P fs={theme.body2} p="10px" bc={theme.white}>
              기프티파이는 이용자의 개인정보를 다음과 같은 목적으로만
              처리합니다.
            </P>
            <P fs={theme.body2} p="10px" bc={theme.white}>
              1. 회원관리
              <br />
              * 이용자 식별, 가입의사 확인, 본인 확인 등<br />
              <br />
              2. 서비스 제공 및 향상
              <br />
              * 서비스 관련 알림 및 안내, 인구통계학적 분석, 서비스 방문 및
              이용기록의 분석, 개인정보 및 관심사에 기반한 이용자간 관계의 형성,
              기존 서비스 개선
              <br />
              * 서비스 이용기록과 접속 빈도 분석, 서비스 이용에 대한 통계,
              서비스 분석 및 통계에 따른 맞춤 서비스 제공 및 광고 게재 등<br />
              <br />
              3. 안전한 이용환경 구축
              <br />* 보안, 프라이버시, 안전 측면에서 이용자가 안심하고 이용할
              수 있는 서비스 이용환경 구축
              <br />
              <br />
              기프티파이는 이용자로부터 동의받은 처리목적이 달성되거나 법령에
              따른 보존기간이 달성될 때까지 개인정보를 처리 및 보유합니다.
            </P>
            <P fs={theme.body2} fw="600" p="10px 115.4px" bc={theme.white}>
              제 3조 개인정보 제공 및 위탁
            </P>
            <P fs={theme.body2} p="10px" bc={theme.white}>
              기프티파이는 원칙적으로 이용자 동의 없이 이용자의 개인정보를
              외부에 공개하지 않습니다. 단 이용자가 외부 제휴사의 서비스를
              이용하기 위하여 개인정보 제공 및 위탁에 직접 동의한 경우, 관련
              법령 규정에 의거하거나 수사 목적으로 법령에 정해진 절차와 방법에
              따라 수사기관의 요구가 있는 경우, 이용자의 생명이나 안전에 급박한
              위험이 확인되어 이를 해소하기 위한 경우는 예외로 합니다. 또한
              통계작성, 학술연구 또는 시장조사를 위하여 필요한 경우에는 특정
              개인을 알아볼 수 없는 통계 자료의 형태로 가공하여 제공할 수
              있습니다.
            </P>
            <P fs={theme.body2} p="10px" bc={theme.white}>
              기프티파이는 원활한 서비스 제공을 위해 아래 위탁 대상자에게
              최소한의 개인정보를 위탁하고 있습니다.
              <br />
              * 카카오페이: 카카오페이 온라인 결제 서비스를 제공하기 위한 테스트
              결제 정보
              <br />
              * Amazon Web Service: 서비스 인프라를 위한 클라우드 서비스
              <br />
              * 채널톡: 고객 상담 서비스
              <br />
            </P>
            <P fs={theme.body2} fw="600" p="10px 137px" bc={theme.white}>
              제 4조 개인정보 파기
            </P>
            <P fs={theme.body2} p="10px" bc={theme.white}>
              기프티파이는 이용자의 개인정보에 대해 처리목적이 달성되어
              불필요하게 되었을 때는 해당 개인정보를 지체 없이 파기합니다.
              <br />
              전자적 파일 형태인 경우 복구 및 재생되지 않도록 기술적인 방법을
              이용하여 완전하게 삭제하고, 그 밖에 기록물, 인쇄물, 서면 등의 경우
              분쇄하거나 소각하여 파기합니다.
              <br />
              단, 관계법령에 따라 개인정보 보존의무가 부과되는 경우에는 법령이
              정한 기간 동안 보존합니다. 관계법령에 의해 보존해야 하는 정보와
              보존기간은 아래와 같습니다.
              <br />
            </P>
            <P fs={theme.body2} p="15px" bc={theme.white}>
              1. 전자상거래 등에서의 소비자보호에 관한 법률
              <br />
              * 표시/광고에 관한 기록: 2024년 3월 18일까지
              <br />
              * 테스트 결제 및 공급에 관한 기록: 2024년 3월 18일까지
              <br />
              * 소비자의 불만 또는 분쟁처리에 관한 기록: 2024년 3월 18일까지
              <br />
              <br />
              2. 신용정보의 이용 및 보호에 관한 법률
              <br />
              * 정보의 수집, 처리 및 이용 등에 관한 기록: 2024년 3월 18일까지
              <br />
              <br />
              3. 통신비밀보호법
              <br />
              * 웹사이트 방문 기록: 2024년 3월 18일까지
              <br />
              <br />
              4. 정보통신망법
              <br />* 본인 확인에 관한 기록: 2024년 3월 18일까지
            </P>
            <P fs={theme.body2} fw="600" p="10px 103.5px" bc={theme.white}>
              제 5조 이용자의 권리와 행사 방법
            </P>
            <P fs={theme.body2} p="10px" bc={theme.white}>
              회원의 개인정보 수정을 위해서는 채널톡으로 요청바랍니다.
              <br />
              회원이 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을
              완료하기 전까지 해당 개인정보를 이용 또는 제공∙위탁하지 않습니다.
            </P>
            <P fs={theme.body2} fw="600" p="10px 9.7px" bc={theme.white}>
              제 6조 개인정보 자동 수집 장치의 설치, 운영 및 그 거부에 관한 사항
            </P>
            <P fs={theme.body2} p="10px" bc={theme.white}>
              기프티파이는 이용자에게 더 나은 서비스를 제공하기 위한 목적으로
              Google, Inc.(이하 "Google")이 제공하는 웹 분석 서비스인 Google
              Analytics를 사용하여 익명의 쿠키정보(인구통계학적 데이터 등)를
              수집을 통해 이용자들이 기프티파이의 서비스를 어떻게 이용하는지
              분석 및 평가하고 이용자의 수요를 파악하며, 서비스와 제품을
              개선하고 맞춤화하여 효율적인 서비스를 제공하는 것에 목적이
              있습니다. Google Analytics를 통해 수집되는 정보의 처리는 Google
              개인정보보호정책과 Google Analytics 이용약관을 적용 받습니다.
            </P>
            <P fs={theme.body2} p="10px" bc={theme.white}>
              1. Google 개인정보보호정책:
              https://www.google.com/intl/ko/policies/privacy/
              <br />
              2. Google Analytics 이용약관:
              https://www.google.com/analytics/terms/kr.html
              <br />
              <br />
              기프티파이는 Google Analytics를 통해 개인을 식별할 수 있는 정보는
              수집하지 않으며, 수집한 정보를 다른 경로를 통해 얻은 개인식별
              정보와 결합하지 않습니다.
              <br />
              <br />
              이용자는 Google Analytics 사용에 대한 선택권을 가지고 있습니다.
              따라서 이용자는 아래의 방법을 통해 Google 애널리틱스 차단 브라우저
              부가 기능을 설치할 수 있습니다.
              <br />
              Google Analytics 차단 브라우저 부가 기능(add-on) 설치:
              https://tools.google.com/dlpage/gaoptout
            </P>
            <P fs={theme.body2} fw="600" p="10px 143.5px" bc={theme.white}>
              제 7조 링크 사이트
            </P>
            <P fs={theme.body2} p="10px" bc={theme.white}>
              기프티파이는 회원에게 다른 기프티파이의 웹사이트 또는 자료에 대한
              링크를 제공할 수 있습니다. 이 경우 기프티파이는 외부사이트 및
              자료에 대한 통제권이 전무하므로 그로부터 제공받는 서비스나 자료의
              유용성에 대해 책임지거나 보증할 수 없습니다. 기프티파이가 포함한
              링크를 클릭하여 타 사이트의 페이지로 옮겨 갈 경우 해당 사이트의
              개인정보보호정책은 기프티파이와 무관하므로 새로 방문한 사이트의
              정책을 검토하시기 바랍니다.
            </P>
            <P fs={theme.body2} fw="600" p="10px 96.8px" bc={theme.white}>
              제 8조 개인정보의 안전성 확보 조치
            </P>
            <P fs={theme.body2} p="10px" bc={theme.white}>
              기프티파이는 이용자의 개인정보 안전성 확보를 위해 다음과 같은
              조치를 취하고 있습니다.
              <br />
              * 기술적 조치: 시스템 관리
              <br />
              * 물리적 조치: 개인정보 보관장소 관리
              <br />
              개인정보 책임 및 문의 <br />
              * 책임: Giftipie
              <br />
              * 문의: Giftipie 채널톡
              <br />
              또한 개인정보가 침해되어 이에 대한 신고나 상담이 필요하신 경우에는
              아래 기관에 문의하셔서 도움을 받으실 수 있습니다.
              <br />
              * 개인정보침해신고센터: 국번 없이 118(https://privacy.kisa.or.kr)
              <br />
              * 개인정보 분쟁조정위원회: 02-2100-2499(http://kopico.go.kr)
              <br />* 대검찰청 사이버수사과: 국번 없이
              1301(http://www.spo.go.kr) <br />
              * 경찰청 사이버안전국: 국번 없이 182
              http://cyberbureau.police.go.kr)
              <br />
            </P>
            <P fs={theme.body2} fw="600" p="10px 83px" bc={theme.white}>
              제 9조 본 개인정보 처리방침의 적용 범위
            </P>
            <P fs={theme.body2} p="10px" bc={theme.white}>
              본 개인정보 처리방침은 기프티파이의 제반 서비스 적용되며, 다른
              이름으로 제공되는 서비스에 대해서는 별개의 개인정보 처리방침이
              적용될 수 있습니다. 기프티파이는 회원에게 다른 기프티파이의
              웹사이트 또는 자료에 대한 링크를 제공할 수 있습니다. 기프티파이가
              포함하고 있는 링크를 클릭하여 타 웹사이트의 페이지로 옮겨 갈 경우
              해당 사이트의 개인정보 처리방침은 기프티파이와 무관하므로 새로
              방문한 사이트의 정책을 검토해 보시기 바랍니다.
            </P>
            <P fs={theme.body2} fw="600" p="10px 79.9px" bc={theme.white}>
              제 10조 개인정보 처리방침의 개정 및 공지
            </P>
            <P fs={theme.body2} p="10px" bc={theme.white}>
              기프티파이는 서비스의 변경사항을 반영하기 위한 목적 등으로 본
              개인정보 처리방침을 수정할 수 있습니다.
            </P>
            <P fs={theme.body2} fw="600" p="10px 71.2px" bc={theme.white}>
              제 11조 개인정보 처리방침 개정(2/26일 기준)
            </P>
            <P fs={theme.body2} p="0 10px 50px 10px" bc={theme.white}>
              1. 맞춤 서비스 제공, 이벤트 정보 제공 및 참여기회 제공,
              인구통계학적 특성에 따른 서비스 제공, 서비스의 유효성 확인, 회원의
              서비스 이용에 대한 통계 등을 목적으로 개인정보를 처리합니다.
              <br />
              <br />
              2. 기프티파이는 서비스를 운용함에 있어 각종 정보를 서비스 화면,
              SMS, 알림 등의 방법으로 회원에게 제공할 수 있으며, 결제 안내 등
              의무적으로 안내해야 하는 정보성 내용 및 일부 혜택성 정보는 수신
              동의 여부와 무관하게 제공합니다.
              <br />
              <br />
              공고일자: 2024년 02월 25일
              <br />
              <br />
              개정일자: 2024년 02월 26일
            </P>
          </FieldContainer>
        </Body>
      </RightContainer>
    </MainContainer>
  );
};

export default Privacy;
