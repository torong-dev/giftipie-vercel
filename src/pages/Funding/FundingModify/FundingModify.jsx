import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { infoToast } from "../../../components/toast";
import { IoIosArrowBack } from "react-icons/io";
import theme from "../../../styles/theme";
import {
  patchFundingModify,
  deleteFundingModify,
  getFundingDetail,
  endFundingModify,
} from "../../../apis/funding";
import {
  MainContainer,
  LeftContainer,
  LeftImgContainer,
  LeftLogoTextIcon,
  BubbleImg,
  LeftRowdiv,
  LeftImg,
  Leftcolumndiv,
  IpadLoveImg,
  P,
  Button,
  RightContainer,
  NavbarDiv,
  ProducImgtDiv,
  NonInputTag,
  FundingImg,
  Body,
  FundingDiv,
  SponserDiv,
  RadioInput,
  BetweenDiv,
  ColumnStartDiv,
  TogetherDiv,
  SponsorComment,
  Textarea,
  ColumnDiv,
  InputLabel,
  InputSpan,
  InputInput,
} from "./FundingModifyStyles";

const FundingModify = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [fundingData, setFundingData] = useState([
    {
      itemName: "",
      showName: "",
      title: "",
      content: "",
      targetAmount: 0,
      publicFlag: "",
      endDate: "",
      itemImage: "",
    },
  ]);

  // 수정페이지로 상세페이지 데이터 불러오기
  useEffect(() => {
    const getData = async () => {
      try {
        if (!id) {
          return;
        }
        const data = await getFundingDetail(id);
        console.log("상세페이지 데이터 불러오기: ", data);
        setFundingData(data);
      } catch (error) {
        console.error("펀딩상세 가져오기 오류:", error);
      }
    };

    getData();
  }, [id]);

  // 펀딩 수정 API
  const handlefundingModifyClick = async () => {
    try {
      if (
        fundingData.publicFlag === "" ||
        fundingData.showName === "" ||
        fundingData.title === "" ||
        fundingData.content === ""
      ) {
        infoToast("내용을 입력해주세요");
        return;
      }

      const data = await patchFundingModify(id, fundingData);

      setFundingData(
        fundingData.map((data) => {
          if (data.id === id) {
            return { ...data, fundingData };
          } else {
            return data;
          }
        })
      );

      navigate(`/fundingdetail/${data.id}`);
    } catch (error) {
      console.error("펀딩 수정 오류:", error);
    }
  };

  // 펀딩 삭제 API
  const handledeleteFundingClick = async () => {
    try {
      const confirmDelete = window.confirm("정말 삭제하시겠습니까?");
      if (!confirmDelete) return;

      await deleteFundingModify(id, fundingData);
      console.log("펀딩 삭제 성공:", id);
      navigate("/");
    } catch (error) {
      console.error("펀딩 삭제 실패:", error);
    }
  };

  // 펀딩 종료 API
  const handlecompleteFundingClick = async () => {
    try {
      if (!id) {
        // 유효한 id가 없으면 데이터를 요청하지 않음
        return;
      }
      const data = await endFundingModify(id); // 펀딩 상세 정보 가져오기
      setFundingData(data); // 가져온 데이터를 상태 변수에 설정
      console.log("펀딩 종료 성공", data);
      navigate("/");
    } catch (error) {
      console.error("펀딩 종료 오류:", error);
    }
  };

  return (
    <MainContainer>
      <LeftContainer>
        <LeftContainer pt="70px">
          <LeftImgContainer>
            <div>
              <LeftLogoTextIcon src="/imgs/Common/giftipie.png" />
            </div>
            <div>
              <P pt="60px" pl="355px" fs="23px" fw="800" color={theme.white}>
                생일선물
                <br />뭐 받고싶어?
              </P>
              <BubbleImg src="/imgs/Home/speech-bubble.png" />
            </div>
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
              <P fs="20px" fw="900" pr="10px">
                정말 원하는 선물
              </P>
            </LeftRowdiv>
            <div>
              <P mt="6px" pt="2px" fs="20px" fw="700" color={theme.white}>
                을 주고 받아요!
              </P>
            </div>
          </LeftRowdiv>

          <LeftRowdiv>
            <Leftcolumndiv ml="30px">
              <P fs="16px" fw="500" pt="30px" pb="5px" color={theme.white}>
                지금은 유저테스트 진행 중 입니다
              </P>
              <P pb="100px" fs="16px" fw="500" color={theme.white}>
                6명의 개발자와 1명의 디자이너가 함께 개발하고 있습니다
              </P>
            </Leftcolumndiv>
            <LeftImg src="/imgs/Home/pie-hi.png" w="340px" pl="100px" />
          </LeftRowdiv>
        </LeftContainer>

        <LeftRowdiv ml="30px"></LeftRowdiv>
        <IpadLoveImg src="/imgs/Home/pie-ipad.png" w="330px" />
      </LeftContainer>

      <RightContainer>
        <NavbarDiv>
          <IoIosArrowBack
            onClick={() => navigate(`/fundingdetail/${id}`)}
            color={theme.white}
            size="20px"
          />
          <P pl="120px" fs="13px" fw="900" color={theme.white}>
            펀딩 수정하기
          </P>
        </NavbarDiv>

        <Body>
          <FundingDiv>
            <TogetherDiv bc={theme.white}>
              <P pt="5px" pb="5px" fs={theme.title} color={theme.black}>
                펀딩 제품
              </P>
              <P pb="20px" fs={theme.detail} color={theme.gray2}>
                상품명과 이미지, 가격은 변경할 수 없어요.
              </P>

              <ProducImgtDiv>
                <SponsorComment>
                  <FundingImg
                    src={fundingData.itemImage}
                    alt="logo"
                    h="124px"
                    w="110px"
                  />
                </SponsorComment>
                <ColumnStartDiv>
                  <NonInputTag mw="230px">
                    <P
                      pl="10px"
                      pt="5px"
                      fs={theme.detail2}
                      color={theme.gray3}
                    >
                      상품명
                    </P>
                    <P
                      pl="10px"
                      pr="10px"
                      pb="5px"
                      fw="500"
                      fs={theme.body1}
                      color={theme.gray3}
                    >
                      {fundingData.itemName}
                    </P>
                  </NonInputTag>
                  <NonInputTag mw="230px">
                    <P
                      pl="10px"
                      pt="5px"
                      fs={theme.detail2}
                      color={theme.gray3}
                    >
                      목표 금액
                    </P>
                    <P
                      pl="10px"
                      pb="5px"
                      fw="500"
                      fs={theme.body1}
                      color={theme.gray3}
                    >
                      {fundingData.targetAmount}원
                    </P>
                  </NonInputTag>
                </ColumnStartDiv>
              </ProducImgtDiv>
            </TogetherDiv>

            <TogetherDiv bc={theme.white}>
              <SponserDiv>
                <div>
                  <P pt="10px" pb="10px" fs={theme.title} color={theme.black}>
                    펀딩 내용
                  </P>
                  <P pb="20px" fs={theme.detail} color={theme.gray2}>
                    공개 방식
                  </P>
                  <SponserDiv>
                    <RadioInput
                      value="true"
                      checked={fundingData.publicFlag === "true"}
                      onChange={(e) => {
                        setFundingData({
                          ...fundingData,
                          publicFlag: e.target.value,
                        });
                      }}
                      type="radio"
                      mb="21px"
                    />
                    <P pb="20px" pl="20px" fs={theme.body2} color={theme.black}>
                      공개
                    </P>
                    <P
                      pb="20px"
                      pl="42px"
                      fs={theme.detail2}
                      color={theme.gray2}
                    >
                      누구나 볼 수 있어요
                    </P>
                  </SponserDiv>

                  <SponserDiv>
                    <RadioInput
                      value="false"
                      checked={fundingData.publicFlag === "false"}
                      onChange={(e) => {
                        setFundingData({
                          ...fundingData,
                          publicFlag: e.target.value,
                        });
                      }}
                      type="radio"
                      mb="21px"
                    />
                    <P pb="20px" pl="20px" fs={theme.body2} color={theme.black}>
                      비공개
                    </P>
                    <P
                      pb="20px"
                      pl="30px"
                      fs={theme.detail2}
                      color={theme.gray2}
                    >
                      링크를 통해서만 방문할 수 있어요
                    </P>
                  </SponserDiv>
                </div>
              </SponserDiv>
              <InputLabel>
                <InputSpan>보여줄 이름</InputSpan>
                <InputInput
                  type="text"
                  placeholder="이름을 입력해주세요"
                  value={fundingData.showName}
                  onChange={(e) => {
                    setFundingData({
                      ...fundingData,
                      showName: e.target.value,
                    });
                  }}
                ></InputInput>
              </InputLabel>

              <InputLabel>
                <InputSpan>제목</InputSpan>
                <InputInput
                  type="text"
                  placeholder="제목을 입력해주세요"
                  value={fundingData.title}
                  onChange={(e) => {
                    setFundingData({ ...fundingData, title: e.target.value });
                  }}
                ></InputInput>
              </InputLabel>

              <InputLabel>
                <InputSpan>본문</InputSpan>
                <Textarea
                  type="textarea"
                  placeholder="본문을 입력해주세요"
                  value={fundingData.content}
                  onChange={(e) => {
                    setFundingData({ ...fundingData, content: e.target.value });
                  }}
                />
              </InputLabel>
            </TogetherDiv>
            <TogetherDiv bc={theme.white} br="30px 30px 0px 0px">
              {/* <P pt="10px" pb="5px" fs={theme.detail} color={theme.gray2}>
                                마감일 설정
                            </P>
                            <InputTag type="date" disabled={false} value={fundingData.endDate} h="40px" w="97%" pl="10px" pt="10px" /> */}

              <NonInputTag>
                <P
                  pl="10px"
                  pt="5px"
                  w="240px"
                  fs={theme.detail2}
                  color={theme.gray3}
                >
                  마감일 설정
                </P>
                <P
                  pl="10px"
                  pb="5px"
                  fw="500"
                  fs={theme.title2}
                  color={theme.gray3}
                >
                  {fundingData.endDate}
                </P>
              </NonInputTag>
              <Button
                onClick={handlefundingModifyClick}
                w="100%"
                h="48px"
                br="16px"
                fs={theme.body1}
                color={theme.white}
                bc={theme.primary}
              >
                펀딩 저장하기
              </Button>
              <BetweenDiv>
                <Button
                  onClick={handledeleteFundingClick}
                  w="100%"
                  h="48px"
                  br="16px 4px 4px 16px"
                  mt="10px"
                  fs={theme.body1}
                  fw="700"
                  color={theme.primaryFont}
                  bc={theme.primaryBtn}
                  // bc="#FFE6E6"
                >
                  삭제하기
                </Button>
                <Button
                  onClick={handlecompleteFundingClick}
                  w="100%"
                  h="48px"
                  br="4px 16px 16px 4px"
                  mt="10px"
                  fw="900"
                  fs={theme.body1}
                  color={theme.gray2}
                  bc={theme.gray6}
                >
                  종료하기
                </Button>
              </BetweenDiv>

              <ColumnDiv>
                <P fs={theme.body2} color={theme.gray3}>
                  펀딩 금액은 계좌로 전달돼요
                </P>
                <P pb="40px" fs={theme.body2} color={theme.gray3}>
                  펀딩에 성공하면 카톡으로 알림이 가요
                </P>
              </ColumnDiv>
            </TogetherDiv>
          </FundingDiv>
        </Body>
      </RightContainer>
    </MainContainer>
  );
};

export default FundingModify;
