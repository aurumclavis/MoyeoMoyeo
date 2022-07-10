import * as S from "./ProductsAnswerWrite.Styles";
export default function ProductsAnswerWrite() {
  return (
    <S.FormWrapper>
      <S.WriteInput maxLength={200} placeholder="200자 이내로 입력해주세요." />
      <S.WriteBtnWrapper>
        <S.WriteBtn>등록</S.WriteBtn>
      </S.WriteBtnWrapper>
    </S.FormWrapper>
  );
}
