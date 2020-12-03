import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <Heading>About</Heading>
      <Description>
        I'm a paragraph. Click here to add your own text and edit me. It’s easy.
        Just click “Edit Text” or double click me to add your own content and
        make changes to the font. Feel free to drag and drop me anywhere you
        like on your page. I’m a great place for you to tell a story and let
        your users know a little more about you.
      </Description>
    </Container>
  );
};

//Container
const Container = styled.div`
  display: flex;
  width: 80%;
  margin: 80px auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

//Heading
const Heading = styled.h2`
  font-weight: 300;
  text-transform: uppercase;
  font-size: 28px;
  margin-bottom: 40px;
`;

//Description Paragraph
const Description = styled.p`
  width: 40%;
  font-weight: 300;
  font-size: 16px;
  font-style: italic;
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.5;
  @media (max-width: 768px) {
    width: 78%;
  }
`;

export default About;
