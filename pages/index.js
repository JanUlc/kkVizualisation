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

  return (
    <Wrapper>
      <TextWrapper>
      <Title><h1>{data.home.title}</h1></Title>
      <Description><p>{data.home.description}</p></Description>
      </TextWrapper>
    </Wrapper>
  );
};

export default Home;
