import Image from "next/image";
import {
  ImageContent,
  ImageWrapper,
  TextContent,
  TextPosition,
  TextWrapper,
  Wrapper,
} from ".././styles/home.style";
import DemoCarousel from "../components/animate/DemoCarousel";
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

console.log(data.home.images.url)

  return (
    <Wrapper>
      <ImageWrapper>
        <ImageContent style={{ width: "70%" }}>
          <DemoCarousel>
            <Image
              src={data.home.images.[0].url}
              width="1800px"
              height="900px"
              objectFit="cover"
            />
            <Image
              src={data.home.images.[1].url}
              width="1800px"
              height="900px"
              objectFit="cover"
            />
            <Image
              src={data.home.images.[2].url}
              width="1800px"
              height="900px"
              objectFit="cover"
            />
          </DemoCarousel>
        </ImageContent>
      </ImageWrapper>
      <TextWrapper>
        <TextPosition>
          <TextContent>
            <h1>{data.home.title}</h1>
            <a>{data.home.description}</a>
          </TextContent>
        </TextPosition>
      </TextWrapper>
    </Wrapper>
  );
};

export default Home;
