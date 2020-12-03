import styled from "styled-components";
import fero from "../assets/fero1.png";

const Rooms = () => {
  return (
    <ContainerStyled>
      <Image>
        <Card>
          <Heading>OUR ROOMS</Heading>
          <Description>
            I'm a paragraph. Click here to add your own text and edit me. I’m a
            great place for you to tell a story and let your users know a little
            more about you.
          </Description>
          <Button>Book a Room</Button>
        </Card>
      </Image>
    </ContainerStyled>
  );
};

// Section Container
const ContainerStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  margin: 40px auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

// Image
const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 60vh;
  background: url(${fero});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

// Card
const Card = styled.div`
  width: 40vh;
  height: 40vh;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
`;

//Heading
const Heading = styled.h2`
  font-weight: 300;
  text-transform: uppercase;
  font-size: 28px;
  margin-bottom: 20px;
`;

//Description Paragraph
const Description = styled.p`
  width: 80%;
  font-weight: 300;
  font-size: 16px;
  font-style: italic;
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.5;
  @media (max-width: 768px) {
    width: 78%;
  }
`;

//Book A Room Button
const Button = styled.a`
  text-align: center;
  padding: 0.7rem 0;
  margin: 1rem 1rem;
  width: 8rem;
  background: transparent;
  color: black;
  border: 1px solid black;
  font-size: 12px;
  &:hover {
    background: black;
    color: white;
  }
`;

export default Rooms;
