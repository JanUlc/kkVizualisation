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
          <Name justify="flex-start">Lorem</Name>
          <Name justify="flex-end">Ipsum</Name>
        </NameWrapper>
        <DescriptionWrapper>
          <Description>
          {data.about.description}
          </Description>
        </DescriptionWrapper>
      </TextWrapper>
      <ImageWrapper>
        <Border>
            <Image src="/Pattern/Face.jpg" height="600px" width="450px" />
        </Border>
      </ImageWrapper>
    </Wrapper>
  );
}
