import { useState } from "react";
import styled from "styled-components";
import fero from "../assets/fero1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Reviews = () => {
  const [a, b, c] = [
    "I'm a testimonial. Click to edit me and add text that says something nice about you and your services.",
    "“I'm a paragraph. Click here to add your own text and edit me.”",
    "“I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.”",
  ];

  const [state, setState] = useState(a);

  const changeTestimonial = (r) => {
    setState(r);
  };

  return (
    <ContainerStyled>
      <Image>
        <Card>
          <Heading>GUEST REVIEW</Heading>
          <Icon icon={faQuoteLeft} />
          <Description>{state}</Description>
          <DotsContainer>
            <Dot
              active={state === a ? "black" : "#ccc"}
              onClick={(e) => changeTestimonial(a)}
            />
            <Dot
              active={state === b ? "black" : "#ccc"}
              onClick={(e) => changeTestimonial(b)}
            />
            <Dot
              active={state === c ? "black" : "#ccc"}
              onClick={(e) => changeTestimonial(c)}
            />
          </DotsContainer>
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
  margin: 80px auto;
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

//Icon
const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: rgba(0, 0, 0);
  font-size: 24px;
  margin-bottom: 16px;
`;

//Description Paragraph
const Description = styled.p`
  width: 80%;
  height: 40%;
  font-weight: 300;
  font-size: 16px;
  font-style: italic;
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.5;
  @media (max-width: 768px) {
    width: 78%;
  }
`;
//DotsContainer
const DotsContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

//Dots
const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(props) => props.active || "#ccc"};
`;

export default Reviews;
