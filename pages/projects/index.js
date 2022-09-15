import {
  Wrapper,
  ColWrapper,
  TextOnImage,
  ImageWrapper,
} from "../../styles/Projects.styles";
import Image from "next/image";
import { useState } from "react";
import { request } from "../../lib/datocms";
import Link from "next/link";
import MediaQuery from "react-responsive";
import DemoCarousel from "../../components/animate/DemoCarousel";

export const PROJECT_QUERY = `{
    allProjects
    {
     id,
    title,
    description,
    images
      {
      url
    }
  }
}`;

export async function getStaticProps() {
  const data = await request({
    query: PROJECT_QUERY,
  });
  return {
    props: { data },
  };
}

export default function Projects({ data }) {
  const shouldBlur = (id) => {
    if (activeColumn === 5) {
      return false;
    }
    return id !== activeColumn ? true : false;
  };

  const [activeColumn, setActiveColumn] = useState(5);

  return (
    <Wrapper>
      <MediaQuery minWidth={1024}>
        {data.allProjects
          .sort((a, b) => a.id - b.id)
          .map(({ id, title, images = null }, index) => (
            <Link
              href={`/projects/${encodeURIComponent(id)}`}
              passHref
              key={id}
            >
              <ColWrapper
                onMouseEnter={() => setActiveColumn(index)}
                blured={shouldBlur(index)}
                onMouseLeave={() => setActiveColumn(5)}
              >
                <Image
                  src={images[0].url}
                  height={"1200px"}
                  width={"600px"}
                  objectFit="cover"
                  alt="OneOfVizualisation"
                />
                <TextOnImage>{title}</TextOnImage>
              </ColWrapper>
            </Link>
          ))}
      </MediaQuery>
      <MediaQuery maxWidth={1023}>
        <DemoCarousel>
          {data.allProjects.map(({ id, images = null }) => (
            <Link
              href={`/projects/${encodeURIComponent(id)}`}
              passHref
              key={id}
            >
              <ImageWrapper>
                <Image
                  src={images[0].url}
                  width={"2560px"}
                  height={"1600px"}
                  objectFit="cover"
                  alt="OneOfVizualisation"
                />
              </ImageWrapper>
            </Link>
          ))}
        </DemoCarousel>
      </MediaQuery>
    </Wrapper>
  );
}
