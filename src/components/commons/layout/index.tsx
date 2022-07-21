import styled from "@emotion/styled";
// import LayoutBanner from "./banner/LayoutBanner.Container";
import LayoutFooter from "./footer/LayoutFooter.Container";
import LayoutHeader from "./header/LayoutHeader.Container";
import { useRouter } from "next/router";
import CountSection from "./CountSection";
import MapBoxComponent from "../mapboxTest";
import { ReactNode } from "react";

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
interface ILayoutProps {
  children: ReactNode;
}

// const SHOWBANNER = ["/", "/events"];
const SHOWCountSection = ["/"];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  // const isShowBanner = SHOW_BANNER.includes(router.asPath);
  const isShowCountSection = SHOWCountSection.includes(router.asPath);
  return (
    <Wrapper>
      <LayoutHeader></LayoutHeader>
      {isShowCountSection && <CountSection />}
      {isShowCountSection && <MapBoxComponent />}
      {/* {isShowBanner && <LayoutBanner />} */}
      <Body>{props.children}</Body>
      <LayoutFooter />
    </Wrapper>
  );
}
