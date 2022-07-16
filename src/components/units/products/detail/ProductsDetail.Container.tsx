import { useState, useRef, useEffect } from "react";
import ProductDetailUI from "./ProductsDetail.Presenter";
import _, { throttle } from "lodash";
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_PRODUCT, FETCH_PRODUCT } from "./ProductsDetail.Queries";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { ExclamationCircleOutlined } from "@ant-design/icons";

export default function ProductDetail() {
  const [activedTab, setActivedTab] = useState("detail");
  const navRef = useRef(null);
  const detailRef = useRef(null);
  const qnaRef = useRef(null);

  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();

  const [deleteProduct] = useMutation(DELETE_PRODUCT);
  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.productId },
  });

  useEffect(() => {
    console.log(data?.fetchProduct);
    window.addEventListener("scroll", onScrollNav);
    return window.removeEventListener("scroll", () => {
      onScrollNav;
    });
  });

  const onScrollNav = _.throttle(() => {
    if (!navRef.current) return;
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      navRef.current.style = "top:0px";
    } else {
      navRef.current.style = "top:-200px";
    }
    if (
      document.documentElement.scrollTop >=
      qnaRef.current?.offsetTop - navRef.current?.clientHeight
    ) {
      setActivedTab("qna");
    } else {
      setActivedTab("detail");
    }
  }, 100);

  const onClickDetail = (event) => {
    window.scrollTo({
      top: detailRef.current?.offsetTop - navRef.current?.clientHeight,
      behavior: "smooth",
    });
    throttle(() => {
      setActivedTab(event.currentTarget.id);
    }, 500);
  };

  const onClickQna = (event) => {
    window.scrollTo({
      top: qnaRef.current?.offsetTop - navRef.current?.clientHeight,
      behavior: "smooth",
    });
    throttle(() => {
      setActivedTab(event.currentTarget.id);
    }, 500);
  };

  const onClickShowConfirm = () => {
    Modal.confirm({
      title: "정말 이 상품을 삭제하시겠습니까?",
      icon: <ExclamationCircleOutlined />,
      content: "삭제한 이후에는 취소가 불가능합니다.",
      onOk() {
        onClickDeleteProduct();
      },
      onCancel() {},
    });
  };

  const onClickDeleteProduct = async () => {
    try {
      await deleteProduct({
        variables: { productId: router.query.productId },
      });
      Modal.success({
        content: "상품 삭제가 완료되었습니다.",
      });
      onClickMoveToPage("/products")();
    } catch (error) {
      Modal.error(error.message);
    }
  };

  return (
    <ProductDetailUI
      data={data}
      navRef={navRef}
      detailRef={detailRef}
      qnaRef={qnaRef}
      activedTab={activedTab}
      onScrollNav={onScrollNav}
      onClickDetail={onClickDetail}
      onClickQna={onClickQna}
      isSeller={false}
      onClickShowConfirm={onClickShowConfirm}
    />
  );
}
