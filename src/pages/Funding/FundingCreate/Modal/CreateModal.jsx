import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import {
  Container,
  Background,
  P,
  ModalBox,
  ModalTitleXBox,
  ModalInput,
  ModalButton,
  XButton,
} from "./CreateModalStyles";
import { postModalItemLink } from "../../../../apis/funding";
import { useNavigate } from "react-router-dom";
import theme from "../../../../styles/theme";

function CreateModal({ closeModal, handleImageSelection }) {
  const navigate = useNavigate();
  const [itemLink, setItemLink] = useState("");

  const handleModalButtonClick = async () => {
    try {
      // 모달창 API
      const data = await postModalItemLink({
        itemLink,
      });
      console.log("펀딩 모달 성공:", data);
      handleImageSelection(data.itemImage);
      closeModal();
      navigate("/fundingcreate");
    } catch (error) {
      console.error("펀딩 모달 오류: ", error);
    }
  };

  return (
    <Container>
      <Background>
        <ModalBox>
          <ModalTitleXBox>
            <P fs={theme.title} color={theme.gray1}>
              상품 이미지 등록
            </P>
            <XButton onClick={closeModal}>
              <IoClose />
            </XButton>
          </ModalTitleXBox>
          <P fs={theme.detail} color={theme.gray4}>
            원하는 상품의 판매페이지 링크를 넣어서 손쉽게 제품 이미지를
            가져오세요!
          </P>
          <ModalInput
            type="text"
            value={itemLink}
            placeholder=" https://www.giftipie.com/32?sdc=goods_rank"
            onChange={(e) => setItemLink(e.target.value)}
          ></ModalInput>
          <ModalButton onClick={handleModalButtonClick}>등록하기</ModalButton>
        </ModalBox>
      </Background>
    </Container>
  );
}

export default CreateModal;
