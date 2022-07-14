import styled from "@emotion/styled";
import LayoutBanner from "./banner/LayoutBanner.Container";
import LayoutFooter from "./footer/LayoutFooter.Container";
import LayoutHeader from "./header/LayoutHeader.Container";
import { useRouter } from "next/router";
import CountSection from "./CountSection";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Body = styled.div`
  /* width: 1200px; */
  max-width: 75rem;
  width: 100%;
  display: flex;
  margin: auto;
`;

const SHOW_BANNER = ["/", "/events"];
const SHOW_CountSection = ["/"];

export default function Layout(props) {
  const router = useRouter();
  const isShowBanner = SHOW_BANNER.includes(router.asPath);
  const isShowCountSection = SHOW_CountSection.includes(router.asPath);
  return (
    <Wrapper>
      <LayoutHeader></LayoutHeader>
      {isShowCountSection && <CountSection />}
      {/* {isShowBanner && <LayoutBanner />} */}
      <Body>{props.children}</Body>
      <LayoutFooter />
    </Wrapper>
  );
}
