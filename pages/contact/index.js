import FormContact from "../../components/formContact/FormContact";
import { TextWrapper, Wrapper } from "../../styles/Contact.styles";

const Contact = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <h1>Neque porro quisquam est qui dolorem</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi risus
            nunc, sollicitudin eget consectetur sodales, vulputate sagittis
            nisl. Duis pharetra, est nec maximus rutrum, odio ipsum fringilla
            est, ac laoreet ligula erat et tellus.
        </p>
      </TextWrapper>
      <FormContact />
    </Wrapper>
  );
};

export default Contact;
