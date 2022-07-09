import { useEffect, useRef, useState } from "react";
import * as S from "./ProductsDetail.Styles";
import styled from "@emotion/styled";
import ProductsQuestionList from "../../productsQuestion/list/ProductsQuestionList.Container";
import ProductsQuestionWrite from "../../productsQuestion/write/ProductsQuestionWrite.Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "antd";

export default function ProductDetailUI(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  useEffect(() => {
    window.addEventListener("scroll", onScrollNav);
  }, []);

  const navRef = useRef(null);
  const qnaRef = useRef(null);

  const onScrollNav = () => {
    if (navRef.current !== null) {
      if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
      ) {
        navRef.current.style = "top:0";
      } else {
        navRef.current.style = "top:-200px";
      }
    }
  };
  const onClickQna = () => {
    window.scrollTo({
      top: qnaRef.current?.offsetTop - 50,
      behavior: "smooth",
    });
  };

  return (
    <S.Wrapper>
      <S.NavWrapper ref={navRef}>
        <S.NavItemWrapper>
          <S.NavItem isActive={true}>상품정보</S.NavItem>
          <S.NavItem onClick={onClickQna} isActive={false}>
            상품문의
          </S.NavItem>
        </S.NavItemWrapper>
      </S.NavWrapper>
      <S.LeftWrapper>
        <S.Title>상품명</S.Title>
        <S.ViewPickWrapper>
          <S.IconWrapper>
            <S.ViewIcon />
            <S.Label>100</S.Label>
          </S.IconWrapper>
          <S.PickIcon />
          <S.Label>11</S.Label>
        </S.ViewPickWrapper>
        <S.Line />
        <S.Label>
          상품요약 상품요약 상품요약 상품요약 상품요약 상품요약 상품요약
          상품요약 상품요약 상품요약 상품요약 상품요약 상품요약 상품요약
          상품요약 상품요약 상품요약 상품요약 상품요약 상품요약 상품요약
          상품요약 상품요약 상품요약 상품요약 상품요약 상품요약 상품요약
          상품요약 상품요약 상품요약 상품요약 상품요약 상품요약{" "}
        </S.Label>
        <S.Line />
        <S.Subtitle>상품 정보</S.Subtitle>
        <Image
          width="100%"
          src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDN8fGFydHxlbnwwfHx8fDE2NTcxMTM3Mjk&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450"
        />{" "}
        <S.CarouselWrapper>
          {/* <S.MySlider {...settings}>
          </S.MySlider> */}
          <S.CarouselImage src="https://images.unsplash.com/photo-1544816155-12df9643f363?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDUxfHxwcm9kdWN0fGVufDB8fHx8MTY1NzEzNzM0MA&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" />
          <S.CarouselImage src="https://images.unsplash.com/photo-1589365278144-c9e705f843ba?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDU0fHxwcm9kdWN0fGVufDB8fHx8MTY1NzEzNzM0MA&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" />
        </S.CarouselWrapper>
        <S.DetailContents>
          상품 상세 내용입니다 상품 상세 내용입니다 상품 상세 내용입니다 상품
          상세 내용입니다 상품 상세 내용입니다 상품 상세 내용입니다 상품 상세
          내용입니다 상품 상세 내용입니다 상품 상세 내용입니다 상품 상세
          내용입니다 상품 상세 내용입니다 상품 상세 내용입니다 상품 상세
          내용입니다 상품 상세 내용입니다 상품 상세 내용입니다 상품 상세
          내용입니다 상품 상세 내용입니다 상품 상세 내용입니다 상품 상세
          내용입니다 상품 상세 내용입니다 상품 상세 내용입니다 상품 상세
          내용입니다 상품 상세 내용입니다 상품 상세 내용입니다 상품 상세
          내용입니다 상품 상세 내용입니다 상품 상세 내용입니다 상품 상세
          내용입니다 상품 상세 내용입니다 상품 상세 내용입니다 상품 상세
          내용입니다 상품 상세 내용입니다 상품 상세 내용입니다 상품 상세
          내용입니다 상품 상세 내용입니다 상품 상세 내용입니다 상품 상세
          내용입니다 상품 상세 내용입니다 상품 상세 내용입니다 상품 상세
          내용입니다 상품 상세 내용입니다 상품 상세 내용입니다 상품 상세
          내용입니다 상품 상세 내용입니다 상품 상세 내용입니다 상품 상세
          내용입니다 상품 상세 내용입니다 상품 상세 내용입니다 상품 상세
          내용입니다 상품 상세 내용입니다{" "}
        </S.DetailContents>
        <S.Line />
        <div ref={qnaRef}>
          <ProductsQuestionWrite />
          <ProductsQuestionList />
        </div>
      </S.LeftWrapper>
      <S.RightWrapper>
        <S.SidebarWrapper>
          <S.Subtitle>00000원</S.Subtitle>
          <S.BtnWrapper>
            {props.isSeller ? (
              <>
                <S.SkyblueBtn>수정하기</S.SkyblueBtn>
                <S.WhiteBtn>삭제하기</S.WhiteBtn>
              </>
            ) : (
              <>
                <S.SkyblueBtn>구매하기</S.SkyblueBtn>
                <S.WhiteBtn>찜하기</S.WhiteBtn>
              </>
            )}
          </S.BtnWrapper>
          <S.SellerContentsWrapper>
            <S.Label>운영자</S.Label>
            <S.Label>00회사</S.Label>
            <S.Label>010-0000-0000</S.Label>
          </S.SellerContentsWrapper>
        </S.SidebarWrapper>
      </S.RightWrapper>
    </S.Wrapper>
  );
}
