import styled from "@emotion/styled";
interface IButtonStyledProps {
  isActive?: boolean;
  fontSize: string;
}
interface IButtonSubmitProps {
  type?: string;
  isActive?: boolean;
  title: string;
  isEdit?: boolean;
  onClick?: () => void;
  fontSize: string;
}
const ButtonStyled = styled.button`
  width: 100%;
  height: 100%;
  padding: 0 10%;
  border-radius: 0.313rem;
  border: none;
  background-color: ${(props: IButtonStyledProps) =>
    props.isActive ? "#ffd24c" : "rgba(255, 210, 76, 0.3)"};
  color: ${(props: IButtonStyledProps) =>
    props.isActive ? "black" : "rgba(87, 84, 77, 0.3)"};
  font-size: ${(props) => props.fontSize};
  :hover {
    cursor: pointer;
  }
`;
export default function ButtonSubmit(props: IButtonSubmitProps) {
  return (
    <ButtonStyled
      fontSize={props.fontSize}
      onClick={props.onClick}
      isActive={props.isActive}
    >
      {props.title}
    </ButtonStyled>
  );
}
