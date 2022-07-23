import { gql } from "@apollo/client";
import { useState } from "react";
import RequestUserList from "../../../../commons/requestUserList";
import * as S from "../../listItem/MyPageListItem.Styles";

const FETCH_LOGIN_USER = gql`
  query fetchLoginUser {
    fetchLoginUser {
      email
      scheduledBoards {
        board {
          title
        }
      }
      confirmedBoards {
        title
      }
    }
  }
`;

export default function MyPageUserBoards() {
  const [requestAccepted, setRequestAccepted] = useState("");
  const [requestRefused, setRequestRefused] = useState("");
  const onClickAcceptRequest = (el: string) => () => {
    setRequestAccepted(el);
  };
  const onClickRefuseRequest = (el: string) => () => {
    setRequestRefused(el);
  };

  return (
    <S.Wrapper>
      <S.ItemWrapper>
        <S.ItemImageWrapper>
          <S.ItemImage src="../../배너이미지_동행1.png" />
        </S.ItemImageWrapper>
        <S.ItemContentsWrapper>
          <S.ItemTitle>
            <S.ItemFinished isFinished={false}>[모집중]</S.ItemFinished>{" "}
            음악페스티벌 하루 동행하실 분
          </S.ItemTitle>
          <S.ItemRowWrapper>
            <S.IconWrapper>
              <S.PeopleIcon />
              <S.ItemText>1명</S.ItemText>
            </S.IconWrapper>
            <S.IconWrapper>
              <S.CalendarIcon />
              <S.ItemText>2022.07.28~2022.07.28</S.ItemText>
            </S.IconWrapper>
          </S.ItemRowWrapper>
          <S.ItemText>
            요약 내용입니다 요약 내용입니다 요약 내용입니다 요약 내용입니다 요약
            내용입니다 요약 내용입니다 요약 내용입니다 요약 내용입니다 요약
            내용입니다 요약 내용입니다 요약 내용입니다 요약 내용입니다 요약
            내용입니다 요약 내용입니다 요약 내용입니다 요약 내용입니다 요약
            내용입니다 요약 내용입니다 요약 내용입니다 요약 내용입니다 요약
            내용입니다 요약 내용입니다 요약 내용입니다 요약 내용입니다
          </S.ItemText>
          <S.MoreText>게시글 더보기</S.MoreText>
          <S.RequestUserWrapper>
            <S.ItemText>동행 신청자</S.ItemText>
            <RequestUserList
              onClickAcceptRequest={onClickAcceptRequest}
              onClickRefuseRequest={onClickRefuseRequest}
              requestAccepted={requestAccepted}
              requestRefused={requestRefused}
              isDetailPage={false}
            />
          </S.RequestUserWrapper>
        </S.ItemContentsWrapper>
      </S.ItemWrapper>

      <S.ItemWrapper>
        <S.ItemImageWrapper>
          <S.ItemImage src="../../배너이미지_동행2.png" />
        </S.ItemImageWrapper>
        <S.ItemContentsWrapper>
          <S.ItemTitle>
            <S.ItemFinished isFinished={true}>[모집완료]</S.ItemFinished>{" "}
            음악페스티벌 하루 동행하실 분
          </S.ItemTitle>
          <S.ItemRowWrapper>
            <S.IconWrapper>
              <S.PeopleIcon />
              <S.ItemText>1명</S.ItemText>
            </S.IconWrapper>
            <S.IconWrapper>
              <S.CalendarIcon />
              <S.ItemText>2022.07.28~2022.07.28</S.ItemText>
            </S.IconWrapper>
          </S.ItemRowWrapper>
          <S.ItemText>
            요약 내용입니다 요약 내용입니다 요약 내용입니다 요약 내용입니다 요약
            내용입니다 요약 내용입니다 요약 내용입니다 요약 내용입니다 요약
            내용입니다 요약 내용입니다 요약 내용입니다 요약 내용입니다 요약
            내용입니다 요약 내용입니다 요약 내용입니다 요약 내용입니다 요약
            내용입니다 요약 내용입니다 요약 내용입니다 요약 내용입니다 요약
            내용입니다 요약 내용입니다 요약 내용입니다 요약 내용입니다
          </S.ItemText>
          <S.MoreText>게시글 더보기</S.MoreText>
          <S.RequestUserWrapper>
            <S.ItemText>동행 신청자</S.ItemText>
            <RequestUserList
              onClickAcceptRequest={onClickAcceptRequest}
              onClickRefuseRequest={onClickRefuseRequest}
              requestAccepted={requestAccepted}
              requestRefused={requestRefused}
              isDetailPage={false}
            />
          </S.RequestUserWrapper>
        </S.ItemContentsWrapper>
      </S.ItemWrapper>
    </S.Wrapper>
  );
}
