import styled from "@emotion/styled";
import LayoutBanner from "./banner/LayoutBanner.Container";
import LayoutFooter from "./footer/LayoutFooter.Container";
import LayoutHeader from "./header/LayoutHeader.Container";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Body = styled.div`
  width: 100%;
  max-width: 75rem;
  padding: 1.25rem;
`;

const SHOW_BANNER = ["/", "/events"];

export default function Layout(props) {
  const router = useRouter();
  const isShowBanner = SHOW_BANNER.includes(router.asPath);
  return (
    <Wrapper>
      <LayoutHeader></LayoutHeader>
      {isShowBanner && <LayoutBanner />}
      <div>{props.children}</div>
      <LayoutFooter />
    </Wrapper>
  );
}
