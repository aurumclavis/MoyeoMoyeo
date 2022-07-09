import { useState, useRef } from "react";
import ProductDetailUI from "./ProductsDetail.Presenter";

export default function ProductDetail() {
  const [activedTab, setActivedTab] = useState("detail");
  const navRef = useRef(null);
  const detailRef = useRef(null);
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

  const onClickDetail = (event) => {
    window.scrollTo({
      top: detailRef.current?.offsetTop - 50,
      behavior: "smooth",
    });
    setActivedTab(event.currentTarget.id);
  };

  const onClickQna = (event) => {
    window.scrollTo({
      top: qnaRef.current?.offsetTop - 50,
      behavior: "smooth",
    });
    setActivedTab(event.currentTarget.id);
  };

  return (
    <ProductDetailUI
      navRef={navRef}
      detailRef={detailRef}
      qnaRef={qnaRef}
      activedTab={activedTab}
      onScrollNav={onScrollNav}
      onClickDetail={onClickDetail}
      onClickQna={onClickQna}
      isSeller={false}
    />
  );
}
