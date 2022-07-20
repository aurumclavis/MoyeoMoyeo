import ButtonSubmit from "../../../../commons/buttons/submit";
import { ProductsAnswerWriteUIProps } from "./ProductsAnswerWrite.Types";
import * as S from "./ProductsAnswerWrite.Styles";

export default function ProductsAnswerWriteUI(
  props: ProductsAnswerWriteUIProps
) {
  return (
    <S.FormWrapper onSubmit={props.handleSubmit(props.onClickCreateComment)}>
      <S.WriteInput
        {...props.register("content")}
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
