import * as S from "./ProductsDetail.Styles";
import ProductsQuestionList from "../question/list/ProductsQuestionList.Container";
import ProductsQuestionWrite from "../question/write/ProductsQuestionWrite.Container";
import { Image } from "antd";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { useRouter } from "next/router";
import BackTopAnt from "../../../commons/backTop";
import { FavoriteBorder } from "@mui/icons-material";
import DOMPurify from "dompurify";
import { useState } from "react";

import Chat from "../../chat";
// import io from "socket.io-client";
// const socket = io.connect("http://localhost:3001");

export default function ProductDetailUI(props: any) {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();
  const [clicked, setClicked] = useState(false);
  const onClickChat = () => {
    setClicked((prev) => !prev);
  };
  return (
    <S.Wrapper>
      {/* 스크롤 할 때 생기는 네비게이션바 */}
      <S.NavWrapper ref={props.navRef}>
        <S.NavItemWrapper>
          <S.NavItem
            id="detail"
            isActive={props.activedTab === "detail"}
            onClick={props.onClickDetail}
          >
            상품정보
          </S.NavItem>
          <S.NavItem
            id="qna"
            isActive={props.activedTab === "qna"}
            onClick={props.onClickQna}
          >
            상품문의
          </S.NavItem>
        </S.NavItemWrapper>
      </S.NavWrapper>

      <S.LeftWrapper>
        <S.Title>{props.data?.fetchProduct.name}</S.Title>
        <S.ViewPickWrapper>
          <S.MobilePrice>{props.data?.fetchProduct.price}원</S.MobilePrice>
          <S.IconWrapper>
            <S.ViewIcon />
            <S.Label>{props.data?.fetchProduct.viewCount}</S.Label>
          </S.IconWrapper>
          <S.IconWrapper>
            <S.PickIcon />
            <S.Label>
              {props.data?.fetchProduct.likedUsers?.length || "0"}
            </S.Label>
          </S.IconWrapper>
        </S.ViewPickWrapper>
        <S.Line />
        <S.Label>{props.data?.fetchProduct.description}</S.Label>
        <S.Line />
        <S.Subtitle ref={props.detailRef}>상품 정보</S.Subtitle>

        {/* 메인(대표) 이미지 */}
        <S.DetailImage
          alt="thumbnail-image"
          src="https://images.unsplash.com/photo-1574629173115-01ba37282238?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1076&q=80"
        />

        {/* 추가 이미지*/}

        <S.PreviewGroup>
          <Image.PreviewGroup>
            <S.ImageItem src="https://images.unsplash.com/photo-1544816155-12df9643f363?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDUxfHxwcm9kdWN0fGVufDB8fHx8MTY1NzEzNzM0MA&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" />
            <S.ImageItem src="https://images.unsplash.com/photo-1589365278144-c9e705f843ba?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDU0fHxwcm9kdWN0fGVufDB8fHx8MTY1NzEzNzM0MA&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" />
            <S.ImageItem src="https://images.unsplash.com/photo-1544816155-12df9643f363?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDUxfHxwcm9kdWN0fGVufDB8fHx8MTY1NzEzNzM0MA&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" />
            <S.ImageItem src="https://images.unsplash.com/photo-1589365278144-c9e705f843ba?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDU0fHxwcm9kdWN0fGVufDB8fHx8MTY1NzEzNzM0MA&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" />
            <S.ImageItem src="https://images.unsplash.com/photo-1544816155-12df9643f363?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDUxfHxwcm9kdWN0fGVufDB8fHx8MTY1NzEzNzM0MA&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" />
            <S.ImageItem src="https://images.unsplash.com/photo-1589365278144-c9e705f843ba?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDU0fHxwcm9kdWN0fGVufDB8fHx8MTY1NzEzNzM0MA&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" />
            <S.ImageItem src="https://images.unsplash.com/photo-1544816155-12df9643f363?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDUxfHxwcm9kdWN0fGVufDB8fHx8MTY1NzEzNzM0MA&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" />
            <S.ImageItem src="https://images.unsplash.com/photo-1589365278144-c9e705f843ba?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDU0fHxwcm9kdWN0fGVufDB8fHx8MTY1NzEzNzM0MA&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" />
          </Image.PreviewGroup>
        </S.PreviewGroup>

        {typeof window !== "undefined" && (
          <S.DetailContents
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(props.data?.fetchProduct.contentSrc),
            }}
          />
        )}

        <S.Line />
        <S.SellerContentsWrapper>
          <S.Label>{props.data?.fetchProduct.seller?.manager}</S.Label>
          <S.Label>{props.data?.fetchProduct.seller?.phone}</S.Label>
        </S.SellerContentsWrapper>
        <S.Line />
        {/* 상품 문의(Q&A) 작성, 조회*/}
        <div ref={props.qnaRef}>
          <ProductsQuestionWrite />
          <ProductsQuestionList />
        </div>
      </S.LeftWrapper>

      {/* 오른쪽 사이드바 Wrapper */}
      <S.RightWrapper>
        <S.SidebarWrapper>
          <S.Subtitle>{props.data?.fetchProduct.price}원</S.Subtitle>
          <S.BtnWrapper>
            {props.isSeller ? (
              <>
                {/* 관계자 : 수정,삭제 */}
                <S.SellerActiveBtn
                  onClick={onClickMoveToPage(
                    `/products/${router.query.productId}/edit`
                  )}
                >
                  수정하기
                </S.SellerActiveBtn>
                <S.WhiteBtn onClick={props.onClickShowConfirm}>
                  삭제하기
                </S.WhiteBtn>
              </>
            ) : (
              <>
                {/* 유저 : 찜하기,구매하기 */}
                <S.ActiveBtn
                  onClick={onClickMoveToPage(
                    `/products/${router.query.productId}/payment`
                  )}
                >
                  구매하기
                </S.ActiveBtn>
                <S.WhiteBtn onClick={props.onClickDibsProduct}>
                  찜하기
                </S.WhiteBtn>
              </>
            )}
          </S.BtnWrapper>
        </S.SidebarWrapper>
      </S.RightWrapper>

      {/* BackTop(맨 위로 가기) 추가 */}
      <BackTopAnt />

      {clicked ? (
        <S.ChatWrapper>
          <Chat
            // socket={socket}
            onClickChat={onClickChat}
            username="username"
            room="1"
          />
        </S.ChatWrapper>
      ) : (
        <S.ChatIconWrapper onClick={onClickChat}>
          <S.ChatIcon />
        </S.ChatIconWrapper>
      )}

      {/* 모바일 화면일때는 찜하기,구매하기가 하단에 고정 */}
      <S.MobilePaymentBar>
        {props.isSeller ? (
          <>
            {/* 관계자 : 수정,삭제 */}
            <S.WhiteBtn onClick={props.onClickShowConfirm}>삭제하기</S.WhiteBtn>
            <S.SellerActiveBtn
              onClick={onClickMoveToPage(
                `/products/${router.query.productId}/edit`
              )}
            >
              수정하기
            </S.SellerActiveBtn>
          </>
        ) : (
          <>
            {/* 유저 : 찜하기,구매하기 */}
            <S.WhiteBtn
              onClick={props.onClickDibsProduct}
              style={{ width: "20%" }}
            >
              <FavoriteBorder />
            </S.WhiteBtn>
            <S.ActiveBtn
              onClick={onClickMoveToPage(
                `/products/${router.query.productId}/payment`
              )}
            >
              구매하기
            </S.ActiveBtn>
          </>
        )}
      </S.MobilePaymentBar>
    </S.Wrapper>
  );
}
