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
  console.log(data);
  return (
    <Wrapper>
      <TextWrapper>
        <HeaderWrap>
        <Title>{data.title}</Title>
        <Style>{data.style}</Style>
        </HeaderWrap>
        <Description>
          {data.description}
        </Description>
      </TextWrapper>
      <ImageWrapper>
        <DemoCarousel>
          {data.images.map(({ url }) => (
            <Image
              src={url}
              width={"1800px"}
              height={"1000px"}
              objectFit="cover"
            />
          ))}
        </DemoCarousel>
      </ImageWrapper>
    </Wrapper>
  );
};

export default ProjectPage;
