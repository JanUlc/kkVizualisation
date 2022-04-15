import {
  Wrapper,
  Container,
  Header,
  ProjectBtn,
  HeaderColumn,
  Logo,
  InstaBtn,
  InstaWrapper,
  BackgorundWrapper,
  Footer
} from "./Layout.styles";
import Image from "next/image";
import InAnimated from "../animate/InAnimated";
import { useRouter } from "next/router";
import React, {useEffect} from "react";
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
      case "/about" :
        return "./Pattern/KK_P2.png";   
      case "/contact":
        return "./Vizualisation/kuchnia2p.jpg";
        case "/" :
        return "./Vizualisation/H_1.jpg";        
      default:
        return "";
    }
  };

  const node = useRef();
  useOnClickOutside(node, () => setOpenMenu(false));

  useEffect( ()=> { 
    setOpenMenu(false)
  }, [router.path])
    
  return (
    <>
      <Wrapper>
        <BackgorundWrapper
          background={chooseBackgorund(router.pathname)}
        >
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
                  <Link id="logo" href="/" passHref>
                    <Image src="/Logo/LOGO_KK.svg" width={150} height={70} alt="Logo" />
                  </Link>
                </InAnimated>
              </Logo>
            </HeaderColumn>
            <HeaderColumn justify="flex-end">
            </HeaderColumn>
          </Header>
          <Container openMenu={openMenu} setOpenMenu={setOpenMenu}>{children}</Container>
          <Footer>
            <HeaderColumn>
            <p>kk.vizualisation</p>
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
              <InstaWrapper>
                <Link
                  id="FacebookButton"
                  href="https://www.facebook.com/KKVisualization-108689925096420"
                  passHref
                >
                  <ButtonHover
                    url={"/Icons/FB.svg"}
                    hoverUrl={"/Icons/FB_kol.svg"}
                  />
                </Link>
              </InstaWrapper>
            </HeaderColumn>
            </ Footer>
          </BackgorundWrapper>
      </Wrapper>
    </>
  );
};

export default Layout;
