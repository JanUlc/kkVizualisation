import Image from "next/image";
import { ImageContent, ImageWrapper, TextContent, TextPosition, TextWrapper, Wrapper, BtnChangeImage, BtnWrapper } from ".././styles/home.style";
import DemoCarousel from "../components/animate/DemoCarousel";

const Home = () => {
  

  return (
    <Wrapper>
      <ImageWrapper>
        <ImageContent style={{ width: "70%" }}>
          <DemoCarousel>
          <Image
            src= "/Vizualisation/salon3p.jpg"
            width="1800px"
            height="900px"
            objectFit="cover"
          />
          <Image
            src= "/Vizualisation/dzidzia1p.jpg"
            width="1800px"
            height="900px"
            objectFit="cover"
          />
          <Image
            src= "/Vizualisation/lazienkaParter1.jpg"
            width="1800px"
            height="900px"
            objectFit="cover"
          />
          </DemoCarousel>
        </ ImageContent>
      </ ImageWrapper>
      <TextWrapper >
        <TextPosition>
          <TextContent>
          <h1> Neque porro quisquam est qui dolorem </h1>
          <a>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi risus
            nunc, sollicitudin eget consectetur sodales, vulputate sagittis
            nisl. Duis pharetra, est nec maximus rutrum, odio ipsum fringilla
            est, ac laoreet ligula erat et tellus.
          </a>
          </ TextContent>
          </ TextPosition>
      </ TextWrapper>
    </ Wrapper>
  );
}

export default Home;
