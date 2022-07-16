import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import CommonInput from "../../../commons/inputs/infoInputs";
import * as S from "./ProductsPayment.Styles";
import { Modal } from "antd";
declare const window: typeof globalThis & {
  IMP: any;
};

export default function ProductsPayment() {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();

  const onClickPayment = () => {
    const IMP = window.IMP;
    IMP.init("imp23997847");
    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        name: "행사 상품",
        amount: 1000,
        buyer_email: "aaa@gmail.com",
        buyer_name: "아무개",
        m_redirect_url: "http://localhost:3000/",
      },
      async (rsp: any) => {
        if (rsp.success) {
          console.log(rsp);
        } else {
          Modal.error({ content: "결제에 실패했습니다. 다시 시도해주세요." });
        }
      }
    );
  };

  return (
    <S.Wrapper>
      <div>
        {/* jQuery */}
        <Script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></Script>
        {/* iamport.payment.js */}
        <Script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></Script>
      </div>
      <S.LeftWrapper>
        <S.Title>구매하기</S.Title>
        <S.Subtitle>상품 정보</S.Subtitle>
        <S.Line />
        <S.ProductInfoWrapper>
          <S.ProductInfoImage src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDN8fGFydHxlbnwwfHx8fDE2NTcxMTM3Mjk&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" />
          <S.ProductInfoTextWrapper>
            <S.Label>상품이름</S.Label>

            <S.SmallLabel>
              상품요약 상품요약 상품요약 상품요약 상품요약 상품요약 상품요약
              상품요약 상품요약 상품요약 상품요약 상품요약 상품요약 상품요약
              상품요약 상품요약 상품요약 상품요약 상품요약 상품요약 상품요약
              상품요약 상품요약 상품요약 상품요약 상품요약 상품요약 상품요약
              상품요약 상품요약 상품요약 상품요약 상품요약 상품요약{" "}
            </S.SmallLabel>
          </S.ProductInfoTextWrapper>
        </S.ProductInfoWrapper>

        <S.Subtitle>배송 정보</S.Subtitle>
        <S.Line />
        <S.ShipInfoWrapper>
          <S.InputWrapper>
            <S.Label>수령인</S.Label>
            <CommonInput placeholder="받는 사람 이름을 입력해주세요." />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>주소</S.Label>
            <S.ZipcodeWrapper>
              <CommonInput placeholder="12345" />
              <S.ZipcodeBtnWrapper>
                <S.WhiteSmallBtn>우편번호 검색</S.WhiteSmallBtn>
              </S.ZipcodeBtnWrapper>
            </S.ZipcodeWrapper>
            <S.AddressWrapper>
              <CommonInput />
            </S.AddressWrapper>
            <S.AddressWrapper>
              <CommonInput />
            </S.AddressWrapper>
          </S.InputWrapper>
        </S.ShipInfoWrapper>
      </S.LeftWrapper>

      {/* 오른쪽 사이드바 Wrapper */}
      <S.RightWrapper>
        <S.SidebarWrapper>
          <S.Label>결제금액</S.Label>
          <S.Title>00000원</S.Title>
          <S.BtnWrapper>
            <S.ActiveBtn onClick={onClickPayment}>결제하기</S.ActiveBtn>
            <S.WhiteBtn
              onClick={onClickMoveToPage(`/products/${router.query.productId}`)}
            >
              취소하기
            </S.WhiteBtn>
          </S.BtnWrapper>
        </S.SidebarWrapper>
      </S.RightWrapper>

      {/* 모바일 화면일때는 사이드바가 아닌 하단 고정 바 */}
      <S.MobilePaymentBar>
        <S.MobilePrice>결제금액 00000원</S.MobilePrice>
        <S.BtnWrapper>
          <S.ActiveBtn onClick={onClickPayment}>결제하기</S.ActiveBtn>
          <S.WhiteBtn
            onClick={onClickMoveToPage(`/products/${router.query.productId}`)}
          >
            취소하기
          </S.WhiteBtn>
        </S.BtnWrapper>
      </S.MobilePaymentBar>
    </S.Wrapper>
  );
}
