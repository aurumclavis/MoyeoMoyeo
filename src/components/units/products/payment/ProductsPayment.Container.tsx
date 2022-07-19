import { useRouter } from "next/router";
import { FETCH_PRODUCT } from "../detail/ProductsDetail.Queries";
import { useMutation, useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../commons/store";
import { CREATE_PAYMENT } from "./ProductsPayment.Queries";
import ProductsPaymentUI from "./ProductsPayment.Presenter";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
declare const window: typeof globalThis & {
  IMP: any;
};
const schema = yup.object({
  postcode: yup.number(),
  addr: yup.string().required(),
  addrDetail: yup.string(),
});

export default function ProductsPayment() {
  const router = useRouter();
  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.productId },
  });
  const [createPayment] = useMutation(CREATE_PAYMENT);

  const [isVisible, setIsVisible] = useState(false);
  const [userInfo] = useRecoilState(userInfoState);
  const { register, handleSubmit, formState, setValue } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const PRODUCT_INFO = {
    id: data?.fetchProduct.id,
    name: data?.fetchProduct.name,
    description: data?.fetchProduct.description,
    price: data?.fetchProduct.price,
  };

  const onClickSearchAddress = () => {
    setIsVisible((prev) => !prev);
  };

  const onCompleteSearchAddress = (data: any) => {
    setValue("postcode", data.zonecode);
    setValue("addr", data.address);
    setIsVisible((prev) => !prev);
  };

  const onClickPayment = async (data) => {
    console.log(data);
    const IMP = window.IMP;
    IMP.init("imp01312583");
    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        name: PRODUCT_INFO.name,
        amount: PRODUCT_INFO.price,
        buyer_postcode: data.postcode,
        buyer_addr: data.addr + data.addrDetail,
        buyer_email: userInfo?.email,
        buyer_name: userInfo?.name,
        merchant_uid: PRODUCT_INFO.id,
        m_redirect_url: "http://localhost:3000/",
      },
      async (rsp: any) => {
        if (rsp.success) {
          console.log(rsp);
          try {
            await createPayment({
              variables: {
                impUid: rsp.imp_uid,
                productId: rsp.merchant_uid,
                address: rsp.buyer_addr,
              },
            });
            alert("결제가 완료되었습니다.");
          } catch (error) {
            alert(error.message);
          }
        } else {
          alert(rsp.error_msg);
        }
      }
    );
  };

  return (
    <ProductsPaymentUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      setValue={setValue}
      product_info={PRODUCT_INFO}
      onClickPayment={onClickPayment}
      isVisible={isVisible}
      onClickSearchAddress={onClickSearchAddress}
      onCompleteSearchAddress={onCompleteSearchAddress}
    />
  );
}
