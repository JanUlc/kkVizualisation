import FormContact from "../../components/formContact/FormContact";
import { TextWrapper, Wrapper } from "../../styles/Contact.styles";
import { request } from "../../lib/datocms";

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

const Contact = ({data}) => {
  return (
    <Wrapper>
      <TextWrapper>
        <h1>Neque porro quisquam est qui dolorem</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi risus
          nunc, sollicitudin eget consectetur sodales, vulputate sagittis nisl.
          Duis pharetra, est nec maximus rutrum, odio ipsum fringilla est, ac
          laoreet ligula erat et tellus.
        </p>
      </TextWrapper>
      <FormContact />
    </Wrapper>
  );
};

export default Contact;
