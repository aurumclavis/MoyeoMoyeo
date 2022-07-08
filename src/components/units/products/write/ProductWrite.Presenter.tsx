import * as S from "./ProductWrite.Styles";
export default function ProductsWriteUI() {
  return (
    <S.Wrapper>
      <S.WriteTitle>상품 등록</S.WriteTitle>
      <S.WriteWrapper>
        {/* 이름, 가격, 요약 입력 */}
        <S.InputWrapper>
          <S.Label>상품 이름(*)</S.Label>
          <S.Input
            maxLength={100}
            placeholder="이름을 입력하세요.(100자 이내)"
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>상품 가격(*)</S.Label>
          <S.Input type="number" placeholder="가격을 입력하세요." />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>상품 요약(*)</S.Label>
          <S.Input
            maxLength={100}
            placeholder="상품 요약을 입력하세요.(100자 이내)"
          />
        </S.InputWrapper>

        {/* 이미지 업로드 UI */}
        <S.InputWrapper>
          <S.Label>대표 이미지</S.Label>
          <S.ImageWrapper>
            <S.ImageItemWrapper>+</S.ImageItemWrapper>
          </S.ImageWrapper>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>추가 이미지</S.Label>
          <S.ImageWrapper>
            <S.ImageItemWrapper>+</S.ImageItemWrapper>
            <S.ImageItemWrapper>+</S.ImageItemWrapper>
          </S.ImageWrapper>
        </S.InputWrapper>

        {/* 웹에디터 UI */}
        <S.EditorWrapper>
          <S.Label>상세 내용(*)</S.Label>
          <S.MyReactQuill placeholder="내용을 입력하세요." />
        </S.EditorWrapper>

        <S.SubmitWrapper>
          <S.SubmitBtn>등록</S.SubmitBtn>
          <S.CancelBtn>취소</S.CancelBtn>
        </S.SubmitWrapper>
      </S.WriteWrapper>
    </S.Wrapper>
  );
}
