import { MainContent } from "../../components/layout/Layout.styles";
import {
  Border,
  Name,
  ImageWrapper,
  NameWrapper,
  TextWrapper,
  Wrapper,
  DescriptionWrapper,
  Description,
} from "../../styles/About.styles";
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
      <TextWrapper>
        <NameWrapper>
          <Name justify="flex-start"><h1>Lorem</h1></Name>
          <Name justify="flex-end"><h1>Ipsum</h1></Name>
        </NameWrapper>
        <DescriptionWrapper>
          <Description>
          <p>{data.about.description}</p>
          </Description>
        </DescriptionWrapper>
      </TextWrapper>
      <ImageWrapper>
            <Image src="/Pattern/Face.jpg" height="600px" width="450px" />
      </ImageWrapper>
    </Wrapper>
  );
}
