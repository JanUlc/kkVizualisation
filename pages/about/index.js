import { MainContent } from "../../components/layout/Layout.styles";
import { LogoWrapper, TextWrapper, Wrapper } from "../../styles/About.styles";
import Image from "next/image";
import { request } from "../../lib/datocms";

export const ABOUT_QUERY = `
{
    about {
      description,
      logo{
        url
      }
    }
}
`;

export async function getStaticProps() {
  const data = await request({
    query: ABOUT_QUERY,
  });
  return {
    props: { data },
  };
}

export default function About({ data }) {
  return (
    <Wrapper>
      
    </Wrapper>
  );
}
