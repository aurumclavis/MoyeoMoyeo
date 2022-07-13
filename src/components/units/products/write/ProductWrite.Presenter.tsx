import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import * as S from "./ProductWrite.Styles";
import { CameraAlt } from "@mui/icons-material";
import { IProductsWriteUIProps } from "./ProductWrite.Types";
import ButtonSubmit from "../../../commons/buttons/submit";
import CommonInput from "../../../commons/inputs/infoInputs";

export default function ProductsWriteUI(props: IProductsWriteUIProps) {
  return (
    <S.Wrapper>
      <S.WriteTitle>{props.isEdit ? "상품 수정" : "상품 등록"}</S.WriteTitle>
      <S.WriteForm onSubmit={props.handleSubmit(props.onClickCreateProduct)}>
        {/* 이름, 가격, 요약 입력 */}
        <S.InputWrapper>
          <S.Label>상품 이름 *</S.Label>
          {/* <S.Input
            {...props.register("name")}
            placeholder="상품의 특성이 잘 드러나도록 입력해주세요."
          /> */}
          <CommonInput
            register={props.register("name")}
            placeholder="상품의 특성이 잘 드러나도록 입력해주세요."
          />
          <S.Error>{props.formState.errors.name?.message}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>상품 가격 *</S.Label>
          <CommonInput
            register={props.register("price")}
            type="number"
            placeholder="가격을 입력해주세요."
          />
          <S.Error>{props.formState.errors.price?.message}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>상품 요약 *</S.Label>
          <CommonInput
            register={props.register("summary")}
            placeholder="상품에 대해 간단하게 요약해주세요."
          />
          <S.Error>{props.formState.errors.summary?.message}</S.Error>
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
          <S.MyReactQuill
            onChange={props.onChangeContents}
            placeholder="상품에 대한 설명을 입력해주세요."
          />
          <S.Error>{props.formState.errors.contents?.message}</S.Error>
        </S.EditorWrapper>

        {/* 등록,취소 버튼 */}
        <S.BtnWrapper>
          <S.SubmitWrapper>
            <ButtonSubmit
              fontSize="1.25rem"
              isActive={props.formState.isValid}
              title={props.isEdit ? "수정" : "등록"}
            />
          </S.SubmitWrapper>
          <S.SubmitWrapper>
            <S.CancelBtn type="button">취소</S.CancelBtn>
          </S.SubmitWrapper>
        </S.BtnWrapper>
      </S.WriteForm>
    </S.Wrapper>
  );
}
