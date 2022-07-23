import ImageUploading, { ImageListType } from "react-images-uploading";
import { UploadOutlined } from "@ant-design/icons";
import { Clear, Edit } from "@mui/icons-material";
import styled from "@emotion/styled";
const ImageWrapper = styled.div`
  width: 100%;
  margin: 0.625rem 0;
`;
const UploadBtn = styled.button`
  width: 100%;
  padding: 0.625rem 0;
  background-color: white;
  border: 1px dashed black;
`;
const UploadIcon = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

interface CommonUploadProps {
  imageList: any;
  onChangeFiles: (imageList: ImageListType, addUpdateIndex?: any) => void;
}

export default function CommonUpload(props: CommonUploadProps) {
  return (
    <ImageUploading
      multiple
      value={props.imageList}
      onChange={props.onChangeFiles}
      maxNumber={1000}
      dataURLKey="data_url"
    >
      {({
        imageList,
        onImageUpload,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
      }) => (
        <div className="upload__image-wrapper">
          <UploadBtn
            type="button"
            style={isDragging ? { color: "red" } : undefined}
            onClick={onImageUpload}
            {...dragProps}
          >
            <UploadOutlined /> 버튼을 클릭하거나 드래그하여 파일을 첨부할 수
            있습니다.
          </UploadBtn>
          <ImageWrapper>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <UploadIcon
                    type="button"
                    onClick={() => onImageUpdate(index)}
                  >
                    <Edit />
                  </UploadIcon>
                  <UploadIcon
                    type="button"
                    onClick={() => onImageRemove(index)}
                  >
                    <Clear />
                  </UploadIcon>
                </div>
              </div>
            ))}
          </ImageWrapper>
        </div>
      )}
    </ImageUploading>
  );
}
