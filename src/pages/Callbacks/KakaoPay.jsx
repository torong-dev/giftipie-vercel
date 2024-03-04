import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getDonationApproval } from "../../apis/funding";
import { BarLoader } from "react-spinners";
import { SpinnerContainer } from "./CallbacksStyle";
import theme from "../../styles/theme";

const KakaoLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const getData = async () => {
    try {
      if (!id) {
        return;
      }

      const params = new URLSearchParams(location.search);
      console.log("params", params);

      // 후원 결제승인 API 호출
      if (params.has("pg_token")) {
        const pg_token = params.get("pg_token");
        console.log("params의 code값", pg_token);
        await getDonationApproval(pg_token);
        navigate(`/fundingdetail/${id}`);
      }
    } catch (error) {
      console.error("결제 오류: ", error);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SpinnerContainer>
      <BarLoader color={theme.primary} loading={true} />
    </SpinnerContainer>
  );
};

export default KakaoLogin;