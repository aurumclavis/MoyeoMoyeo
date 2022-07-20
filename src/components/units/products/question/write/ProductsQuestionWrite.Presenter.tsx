import ButtonSubmit from "../../../../commons/buttons/submit";
import * as S from "./ProductsQuestionWrite.Styles";
import { IProductsQuestionWriteUIProps } from "./ProductsQuestionWrite.Types";
export default function ProductsQuestionWriteUI(
  props: IProductsQuestionWriteUIProps
) {
  return (
    <S.FormWrapper
      onSubmit={props.handleSubmit(() => {
        console.log("submit test");
      })}
    >
      <S.WriteTitle>상품 문의</S.WriteTitle>
      <S.WriteInput
        {...props.register("contents")}
        maxLength={200}
        placeholder="200자 이내로 입력해주세요."
      />
      <S.WriteBtnWrapper>
        <S.SubmitWrapper>
          <ButtonSubmit
            fontSize="1rem"
            isActive={props.formState.isValid}
            title="등록"
          />
        </S.SubmitWrapper>
      </S.WriteBtnWrapper>
    </S.FormWrapper>
  );
}
