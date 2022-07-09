import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import * as S from "./ProductWrite.Styles";
import { CameraAlt } from "@mui/icons-material";

export default function ProductsWriteUI() {
  return (
    <S.Wrapper>
      <S.WriteTitle>상품 등록</S.WriteTitle>
      <S.WriteWrapper>
        {/* 이름, 가격, 요약 입력 */}
        <S.InputWrapper>
          <S.Label>상품 이름 *</S.Label>
          <S.Input placeholder="상품의 특성이 잘 드러나도록 입력해주세요." />
          <S.Error>50자 이내</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>상품 가격 *</S.Label>
          <S.Input type="number" placeholder="가격을 입력해주세요." />
          <S.Error></S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>상품 요약 *</S.Label>
          <S.Input placeholder="상품에 대해 간단하게 요약해주세요." />
          <S.Error></S.Error>
        </S.InputWrapper>

        {/* 이미지 업로드 UI */}
        <S.InputWrapper>
          <S.Label>대표 이미지 (최대 1장)</S.Label>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture"
            maxCount={1}
          >
            <Button icon={<UploadOutlined />}>사진등록</Button>
          </Upload>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>추가 이미지</S.Label>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture"
            maxCount={3}
            multiple
          >
            <Button icon={<UploadOutlined />}>사진등록</Button>
          </Upload>
        </S.InputWrapper>

        {/* 웹에디터 UI */}
        <S.EditorWrapper>
          <S.Label>상세 내용 *</S.Label>
          <S.MyReactQuill placeholder="상품에 대한 설명을 입력해주세요." />
          <S.Error></S.Error>
        </S.EditorWrapper>

        <S.BtnWrapper>
          <S.SubmitWrapper>
            <S.SubmitBtn>등록</S.SubmitBtn>
            <S.CancelBtn>취소</S.CancelBtn>
          </S.SubmitWrapper>
        </S.BtnWrapper>
      </S.WriteWrapper>
    </S.Wrapper>
  );
}
