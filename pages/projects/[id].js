import { request } from "../../lib/datocms";
import {
  Wrapper,
  ImageWrapper,
  TextWrapper,
  Title,
  Description,
  HeaderWrap,
  Style,
} from "../../styles/ProjectPage.style";
import DemoCarousel from "../../components/animate/DemoCarousel";
import Image from "next/image";

const getProjectQuery = (id) => {
  return `{
        allProjects
         (filter: {
          id: {eq: ${id}}
        })
        {
         id,
        title,
        style,
        description,
        images
          {
          url
        }
      }
    }`
}

export async function getServerSideProps(context) {
  const id = context.params.id;

  const data = await request({
    query: getProjectQuery(id),
  });
  return {
    props: { data: data.allProjects[0] },
  };
};

const ProjectPage = ({ data }) => {
  return (
    <Wrapper>
      <TextWrapper>
        <HeaderWrap>
        <Title><h1>{data.title}</h1></Title>
        <Style><p>{data.style}</p></Style>
        </HeaderWrap>
        <Description>
          <p>{data.description}</p>
        </Description>
      </TextWrapper>
      <ImageWrapper>
        <DemoCarousel>
          {data.images.map(({ url }) => (
            <Image
              src={url}
              width={"1400px"}
              height={"800px"}
              objectFit="cover"
            />
          ))}
        </DemoCarousel>
      </ImageWrapper>
    </Wrapper>
  );
};

export default ProjectPage;
