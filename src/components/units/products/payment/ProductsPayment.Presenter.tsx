import * as S from "./ProductsPayment.Styles";
import Script from "next/script";
import CommonInput from "../../../commons/inputs/infoInputs";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { useRouter } from "next/router";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";
import { IProductsPaymentUIProps } from "./ProductsPayment.Types";

export default function ProductsPaymentUI(props: IProductsPaymentUIProps) {
  const { onClickMoveToPage } = useMoveToPage();
  const router = useRouter();
  return (
    <S.FormWrapper onSubmit={props.handleSubmit(props.onClickPayment)}>
      {/* jQuery : iamport payment */}
      <div>
        <Script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></Script>
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
          <S.ProductInfoImage
            onError={(event) => {
              if (event.target instanceof HTMLImageElement)
                event.target.src = "../../error-image.png";
            }}
            src={`https://storage.googleapis.com/${props.product_info.imageSrc}`}
          />
          <S.ProductInfoTextWrapper>
            <S.Label>{props.product_info.name}</S.Label>
            <S.SmallLabel>{props.product_info.description}</S.SmallLabel>
          </S.ProductInfoTextWrapper>
        </S.ProductInfoWrapper>

        <S.Subtitle>배송 정보</S.Subtitle>
        <S.Line />
        <S.ShipInfoWrapper>
          <S.InputWrapper>
            <S.Label>주소</S.Label>
            <S.ZipcodeWrapper>
              <CommonInput
                readOnly
                register={props.register("postcode")}
                placeholder="12345"
              />
              <S.ZipcodeBtnWrapper>
                <S.WhiteSmallBtn
                  type="button"
                  onClick={props.onClickSearchAddress}
                >
                  우편번호 검색
                </S.WhiteSmallBtn>
              </S.ZipcodeBtnWrapper>
            </S.ZipcodeWrapper>
            <S.AddressWrapper>
              <CommonInput
                readOnly
                register={props.register("addr")}
                placeholder="주소를 입력해주세요."
              />
            </S.AddressWrapper>
            <S.AddressWrapper>
              <CommonInput
                register={props.register("addrDetail")}
                placeholder="세부 주소를 입력해주세요."
              />
            </S.AddressWrapper>
          </S.InputWrapper>
        </S.ShipInfoWrapper>
      </S.LeftWrapper>
      {props.isVisible && (
        <Modal
          visible={true}
          onOk={props.onClickSearchAddress}
          onCancel={props.onClickSearchAddress}
        >
          <DaumPostcode onComplete={props.onCompleteSearchAddress} />
        </Modal>
      )}
      {/* 오른쪽 사이드바 Wrapper */}
      <S.RightWrapper>
        <S.SidebarWrapper>
          <S.Label>결제금액</S.Label>
          <S.Title>{props.product_info.price}원</S.Title>
          <S.BtnWrapper>
            <S.ActiveBtn isActive={props.formState.isValid}>
              결제하기
            </S.ActiveBtn>
            <S.WhiteBtn
              type="button"
              onClick={onClickMoveToPage(`/products/${router.query.productId}`)}
            >
              취소하기
            </S.WhiteBtn>
          </S.BtnWrapper>
        </S.SidebarWrapper>
      </S.RightWrapper>

      {/* 모바일 화면일때는 사이드바가 아닌 하단 고정 바 */}
      <S.MobilePaymentBar>
        <S.MobilePrice>결제금액 {props.product_info.price}원</S.MobilePrice>
        <S.BtnWrapper>
          <S.ActiveBtn isActive={props.formState.isValid}>결제하기</S.ActiveBtn>
          <S.WhiteBtn
            type="button"
            onClick={onClickMoveToPage(`/products/${router.query.productId}`)}
          >
            취소하기
          </S.WhiteBtn>
        </S.BtnWrapper>
      </S.MobilePaymentBar>
    </S.FormWrapper>
  );
}
