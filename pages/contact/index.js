import {
  FormWrapper,
  TextWrapper,
  Title,
  Wrapper,
  Description,
} from "../../styles/Contact.styles";
import { request } from "../../lib/datocms";
import FormContact from "../../components/formContact/FormContact";

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

const Contact = ({ data }) => {
  return (
    <Wrapper>
      <TextWrapper>
        <Title>
          <h1>Neque porro quisquam est qui dolorem</h1>
        </Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi risus
          nunc, sollicitudin eget consectetur sodales, vulputate sagittis nisl.
          Duis pharetra, est nec maximus rutrum, odio ipsum fringilla est, ac
          laoreet ligula erat et tellus.
        </Description>
      </TextWrapper>
      <FormWrapper>
        <FormContact />
      </FormWrapper>
    </Wrapper>
  );
};

export default Contact;
