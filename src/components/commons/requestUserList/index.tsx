import styled from "@emotion/styled";

export const RequestUserListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* ${(props: any) => props.isDetailPage && "flex-direction: column;"} */

  align-items: center;
  justify-content: center;
`;
export const RequestUserWrapper = styled.div`
  width: 90%;
  width: ${(props) => !props.isDetailPage && "100%"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation-name: decided;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  ${(props: any) =>
    props.decided &&
    "@keyframes decided {30%{opacity:1;}50%{opacity:0.5;}60%{opacity:1;}70%{opacity:0;visibility:hidden;width:90%;height:auto;}70.01%{opacity:0;visibility:hidden;width:0;height:0;}100%{opacity:0;visibility:hidden;width:0;height:0;}}"}
`;
export const RequestUserName = styled.div`
  width: 36%;
  font-size: 1.1rem;
`;
export const AcceptButton = styled.button`
  width: 40%;
  ${(props: any) => props.requestAccepted && "width:60%;"}
  ${(props: any) => props.requestRefused && "width:0;"}
  border: none;
  border-radius: 5px;
  background-color: #00ad07;
  color: white;
  transition: 0.5s;
  cursor: pointer;
`;
export const RefuseButton = styled.button`
  width: 20%;
  ${(props: any) => props.requestRefused && "width:60%;"}
  ${(props: any) => props.requestAccepted && "width:0;"}
  border: none;
  border-radius: 5px;
  background-color: #d2d2d2;
  color: #323232;
  transition: 0.5s;
  cursor: pointer;
`;
// uuid v4를 key값으로 넣으면 왜 transition이 먹통이 되는 걸까???
export default function RequestUserList(props: any) {
  return (
    <RequestUserListWrapper>
      {["송인호"]
        .filter((el) => el === "송인호")
        .map((el) => (
          <RequestUserWrapper
            key={el}
            isDetailPage={props.isDetailPage}
            decided={props.requestAccepted || props.requestRefused}
          >
            <RequestUserName>{el}</RequestUserName>
            <AcceptButton
              onClick={props.onClickAcceptRequest}
              requestAccepted={props.requestAccepted}
              requestRefused={props.requestRefused}
            >
              {props.requestRefused ? "" : "수락하기"}
            </AcceptButton>
            <RefuseButton
              onClick={props.onClickRefuseRequest}
              requestAccepted={props.requestAccepted}
              requestRefused={props.requestRefused}
            >
              {props.requestAccepted ? "" : "거절"}
            </RefuseButton>
          </RequestUserWrapper>
        ))}
    </RequestUserListWrapper>
  );
}
