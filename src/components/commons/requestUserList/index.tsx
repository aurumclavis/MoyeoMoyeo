import styled from "@emotion/styled";
import RequestUserItems from "./requestUserItems";
export const RequestUserListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem 0;
`;

// uuid v4를 key값으로 넣으면 왜 transition이 먹통이 되는 걸까???
export default function RequestUserList(props: any) {
  return (
    <RequestUserListWrapper>
      {props.requestUsers?.map((el: any) => (
        <RequestUserItems
          key={el}
          el={el}
          isDetailPage={props.isDetailPage}
          requestAccepted={props.requestAccepted}
          requestRefused={props.requestRefused}
          onClickAcceptRequest={props.onClickAcceptRequest}
          onClickRefuseRequest={props.onClickRefuseRequest}
        />
      ))}
    </RequestUserListWrapper>
  );
}
