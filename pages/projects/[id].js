import { Wrapper } from "../../styles/home.style";
import { request } from "../../lib/datocms";
import { PROJECT_QUERY } from "./index";


const getProjectQuery = (id) => {
  return `{
        allProjects
         (filter: {
          id: {eq: ${id}}
        })
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
};


export async function getServerSideProps(context) {
  const id = context.params.id;

  const data = await request({
    query: getProjectQuery(id),
  });
  return {
    props: { data: data.allProjects[0] },
  };
}


const ProjectPage = ({ data }) => {
  console.log(data)
  return <Wrapper>{data.title}</Wrapper>;
};

export default ProjectPage;
