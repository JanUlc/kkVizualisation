import Image from "next/image";
import {
  Title,
  Description,
  Wrapper,
  TextWrapper,
} from ".././styles/home.style";
import { request } from "../lib/datocms";

const HOMEPAGE_QUERY = `{
    home{
      title,
      description,
      images{
        url
      }
    }
}`;

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
  });
  return {
    props: { data },
  };
}

const Home = ({ data }) => {
  console.log(data.home.images.url);

  return (
    <Wrapper>
      <TextWrapper>
      <Title>{data.home.title}</Title>
      <Description>{data.home.description}</Description>
      </TextWrapper>
    </Wrapper>
  );
};

export default Home;
