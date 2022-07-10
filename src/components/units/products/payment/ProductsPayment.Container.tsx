import * as S from "./ProductsPayment.Styles";
declare const window: typeof globalThis & {
  IMP: any;
};
interface IPointProps {
  setVisible?: any;
}

export default function ProductsPayment(props: IPointProps) {
  return (
    <S.Wrapper>
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
            <S.Input placeholder="받는 사람 이름을 입력해주세요." />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>주소</S.Label>
            <S.ZipcodeWrapper>
              <S.Input placeholder="12345" />
              <S.ZipcodeBtnWrapper>
                <S.WhiteSmallBtn>우편번호 검색</S.WhiteSmallBtn>
              </S.ZipcodeBtnWrapper>
            </S.ZipcodeWrapper>
            <S.AddressWrapper>
              <S.Input />
            </S.AddressWrapper>
            <S.AddressWrapper>
              <S.Input />
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
            <S.SkyblueBtn>결제하기</S.SkyblueBtn>
            <S.WhiteBtn>취소하기</S.WhiteBtn>
          </S.BtnWrapper>
        </S.SidebarWrapper>
      </S.RightWrapper>
    </S.Wrapper>
  );
}
