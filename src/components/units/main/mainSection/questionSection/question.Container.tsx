import { Collapse } from "antd";
import React from "react";
import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

const { Panel } = Collapse;

export default function QuestionSection() {
  const onChange = (key: any) => {};

  return (
    <OutWrapper>
      <InnerWrapper>
        <TitleWrapper>
          <TitleImage src="icon/done.png" />
          <MainTitle> 자주하는 질문 </MainTitle>
        </TitleWrapper>
        <Wrapper defaultActiveKey={["1"]} onChange={onChange}>
          <Title header="상품 구매전에 관련하여 문의를 하고 싶어요" key="1">
            <p>
              구매하시려는 상품의 상세페이지 하단에 댓글로 판매자에게 직접
              문의하실 수 있습니다.
            </p>
          </Title>
          <Title header="정확한 행사위치를 알 수 있을까요?" key="2">
            <p>
              가고자 희망하시는 행사의 상세페이지를 방문하시면 정확한 행사장의
              위치와 주변 편의시설을 모두 확인하실 수 있습니다.
            </p>
          </Title>
          <Title
            header="꼭 모여?모여!에 등록된 행사의 동행만 구할 수 있나요?"
            key="3"
          >
            <p>
              아닙니다. 꼭 저희 모여?모여!에 등록된 행사가 아니더라도 타
              이벤트의 동행을 구하시고자 한다면 가입 후 언제든 글을 올려주시길
              바랍니다.
            </p>
          </Title>
          <Title header="서울시 외 공공 행사는 없나요? " key="4">
            <p>
              아쉽게도 현재는 서울시에서 열리는 공공행사만 등록이 되어있습니다.
              타 지역은 추후 추가 예정이오니 많은 관심 부탁드립니다.
            </p>
          </Title>
        </Wrapper>
      </InnerWrapper>
      <InnerWrapper>
        <TitleWrapper>
          <TitleImage src="icon/done.png" />
          <MainTitle> 자주하는 질문 [관계자] </MainTitle>
        </TitleWrapper>
        <Wrapper defaultActiveKey={["1"]} onChange={onChange}>
          <Titles header="상품/행사를 중복 등록해도 되나요?" key="1">
            <p>
              아쉽게도 같은 상품과 행사를 중복 등록시, 모여?모여! 관리자가
              삭제를 진행합니다.
            </p>
          </Titles>
          <Titles header="판매된 내역은 어디에서 볼 수 있나요?" key="2">
            <p>
              관계자 계정으로 로그인 후 마이페이지에서 확인하실 수 있습니다.
            </p>
          </Titles>
          <Titles header="등록한 행사정보를 수정할 수 있나요?" key="3">
            <p>
              네 가능합니다
              <br />
              등록한 행사 상세페이지에 들어가시면, 수정하기 버튼이 있습니다.
            </p>
          </Titles>
          <Titles header="행사 등록시 요금이 발생하나요?" key="4">
            <p>아니요. 무료로 이용하실 수 있습니다.</p>
          </Titles>
        </Wrapper>
      </InnerWrapper>
    </OutWrapper>
  );
}

const OutWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    margin: 2rem 0rem 2rem 0rem;
    padding: 0 1.125rem;
    gap: 30px;
  }
`;
const InnerWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  border: none;
  margin-bottom: auto;
  @media ${breakPoints.mobile} {
    width: 100%;
    height: auto;
  }
`;
const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  border: none;
`;
const MainTitle = styled.h2`
  text-align: left;
  margin-bottom: 20px;
  position: relative;
  @media ${breakPoints.mobile} {
    margin-bottom: 0px;
  }
`;
const TitleImage = styled.img`
  width: 34px;
  height: 34px;
`;
const Wrapper = styled(Collapse)`
  width: 100%;
  border-radius: 7px;
  border: none;
`;
const Title = styled(Panel)`
  width: 100%;
  border-radius: 7px;
  background-color: #ffe69a;
`;
const Titles = styled(Panel)`
  width: 100%;
  border-radius: 7px;
  background-color: lavender;
  color: white;
`;
