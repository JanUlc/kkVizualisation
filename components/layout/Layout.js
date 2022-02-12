import {
  Wrapper,
  Container,
  Header,
  ProjectBtn,
  HeaderColumn,
  Logo,
  InstaBtn,
  InstaWrapper,
} from "./Layout.styles";
import Footer from "../footer/Footer";
import Image from "next/image";
import InAnimated from "../animate/InAnimated";
import { useRouter } from "next/router";
import React from "react";
import { useState, useRef } from "react";
import { useOnClickOutside } from "../../hooks/hooks";
import Burger from "../burger/Burger";
import Menu from "../menu/Menu";
import ButtonHover from "../ButtonHover/ButtonHover";
import Link from "next/link";

const Layout = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();
  const chooseBackgorund = (path) => {
    switch (path) {
      case "/contact":
        return "./Vizualisation/kuchnia1pP.jpg";
      default:
        return "";
    }
  };

  const node = useRef();
  useOnClickOutside(node, () => setOpenMenu(false));

  return (
    <>
      <Wrapper>
        <Header>
          <HeaderColumn>
            <div ref={node}>
              <Burger openMenu={openMenu} setOpenMenu={setOpenMenu} />
              <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
            </div>
          </HeaderColumn>
          <HeaderColumn justify="center">
            <Logo>
              <InAnimated>
                <Link id="logo" href="/">
                  <Image src="/Logo/K-221.svg" width={60} height={60} />
                </Link>
              </InAnimated>
            </Logo>
          </HeaderColumn>
          <HeaderColumn justify="flex-end">
            <InstaWrapper>
            <Link
              id="InstaButton"
              href="https://www.instagram.com/kk.visualization/"
              passHref
            >
              <ButtonHover
                url={"/Icons/Insta.svg"}
                hoverUrl={"/Icons/Insta_kol.svg"}
              />
            </Link>
            </InstaWrapper>
          </HeaderColumn>
        </Header>
        <Container
          background={chooseBackgorund(router.pathname)}
          openMenu={openMenu}
        >
          {children}
        </Container>
        <Footer></Footer>
      </Wrapper>
    </>
  );
};

export default Layout;
