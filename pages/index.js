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
  console.log(data.home.images.url);

  return (
    <Wrapper>
      <ImageWrapper>
        <ImageContent style={{ width: "70%" }}>
          <DemoCarousel>
            {data.home.images.map(({url}) => (
              <Image
                src={url}
                width={"1800px"}
                height={"900px"}
                objectFit="cover"
              />
            ))}
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
