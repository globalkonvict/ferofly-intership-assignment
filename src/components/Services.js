import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faTree,
  faSwimmingPool,
  faWifi,
  faTshirt,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <ContainerStyled>
      <Heading>our services</Heading>
      <ServicesContainer>
        <Offerings>
          <Icon icon={faCoffee} />
          <Title>Breakfast</Title>
          <Description>
            I'm a paragraph. Click here to add your own text and edit me.
          </Description>
        </Offerings>
        <Offerings>
          <Icon icon={faTree} />
          <Title>Garden</Title>
          <Description>
            I'm a paragraph. Click here to add your own text and edit me.
          </Description>
        </Offerings>
        <Offerings>
          <Icon icon={faSwimmingPool} />
          <Title>Pool</Title>
          <Description>
            I'm a paragraph. Click here to add your own text and edit me.
          </Description>
        </Offerings>
        <Offerings>
          <Icon icon={faWifi} />
          <Title>Free Wifi</Title>
          <Description>
            I'm a paragraph. Click here to add your own text and edit me.
          </Description>
        </Offerings>
        <Offerings>
          <Icon icon={faTshirt} />
          <Title>Daily Housekeeping</Title>
          <Description>
            I'm a paragraph. Click here to add your own text and edit me.
          </Description>
        </Offerings>
        <Offerings>
          <Icon icon={faUtensils} />
          <Title>In-Room Dining Service</Title>
          <Description>
            I'm a paragraph. Click here to add your own text and edit me.
          </Description>
        </Offerings>
      </ServicesContainer>
    </ContainerStyled>
  );
};

// Section Container
const ContainerStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  margin: 100px auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

//Heading
const Heading = styled.h2`
  font-weight: 300;
  text-transform: uppercase;
  font-size: 26px;
  margin-bottom: 20px;
`;

//Services Container
const ServicesContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
`;

//Offerings
const Offerings = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 20px 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

//Icon
const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);
  font-size: 35px;

`;

//title
const Title = styled.h3`
  font-weight: 700;
  color: black;
  margin: 20px 0;
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

export default Services;
