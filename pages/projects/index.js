import {  Wrapper, ColWrapper, TextOnImage } from "../../styles/Projects.styles";
import Image from "next/image";
import { useState } from "react";
import { request } from "../../lib/datocms";
import Link from "next/link";

const PROJECT_QUERY = `{
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


export default function Projects({data}) {

const shouldBlur = (id) => {
    if(activeColumn === 0) {
      return false;
    };
  return id !== activeColumn ? true : false;
}

const [activeColumn, setActiveColumn] = useState(0);

  return (
    <Wrapper>
      {data.allProjects.map(({ id, title,  images = null }, index) => (
        <Link href={`/projects/${encodeURIComponent(id)}`}>
        <ColWrapper onMouseEnter={() => setActiveColumn(index)} blured={shouldBlur(index)} onMouseLeave={() => setActiveColumn(0)}>
        <Image src={images[0].url} height={'1200px'} width={'600px'} objectFit="cover" />
        <TextOnImage>{title}</TextOnImage>
       </ ColWrapper>
       </ Link>
      ))
      }
    </Wrapper>
  );
}
