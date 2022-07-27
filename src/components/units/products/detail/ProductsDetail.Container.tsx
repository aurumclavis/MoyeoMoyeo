import { useState, useRef, useEffect, MouseEvent } from "react";
import ProductDetailUI from "./ProductsDetail.Presenter";
import _, { throttle } from "lodash";
import { useMutation, useQuery } from "@apollo/client";
import {
  DELETE_PRODUCT,
  FETCH_PRODUCT,
  DIBS_PRODUCT,
  UNDIBS_PRODUCT,
} from "./ProductsDetail.Queries";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { userInfoState, dibsProductIdState } from "../../../../commons/store";
import { useRecoilState } from "recoil";

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
  const [dibsProduct] = useMutation(DIBS_PRODUCT);
  const [undibsProduct] = useMutation(UNDIBS_PRODUCT);
  const [dibsId, setDibsId] = useRecoilState(dibsProductIdState);
  const [userInfo] = useRecoilState(userInfoState);

  useEffect(() => {
    window.addEventListener("scroll", onScrollNav);
    window.removeEventListener("scroll", () => {
      return onScrollNav;
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

  const onClickDetail = (event: MouseEvent<HTMLDivElement>) => {
    window.scrollTo({
      top: detailRef.current?.offsetTop - navRef.current?.clientHeight,
      behavior: "smooth",
    });
    throttle(() => {
      setActivedTab(event.currentTarget.id);
    }, 500);
  };

  const onClickQna = (event: MouseEvent<HTMLDivElement>) => {
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
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickDibsProduct = async () => {
    if (!dibsId) {
      try {
        const result = await dibsProduct({
          variables: {
            productId: router.query.productId,
          },
        });
        Modal.success({
          content: "관심 상품 목록에 담았습니다.",
        });
        setDibsId(result.data.dibsProduct[0].id);
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
      }
    } else {
      try {
        await undibsProduct({
          variables: {
            productId: router.query.productId,
          },
        });
        setDibsId("");
        Modal.success({
          content: "찜 목록에서 해제되었습니다.",
        });
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
      }
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
      isSeller={userInfo?.email === data?.fetchProduct.seller.email}
      onClickShowConfirm={onClickShowConfirm}
      onClickDibsProduct={onClickDibsProduct}
    />
  );
}
