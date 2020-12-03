import styled from "styled-components";

const Activities = () => {
  return (
    <ContainerStyled>
      <Heading>THINGS TO DO</Heading>
      <ServicesContainer>
        <Offerings>
          <Title>Wineries Tour</Title>
          <Description>
            I'm a paragraph. Click here to add your own text and edit me.
          </Description>
        </Offerings>
        <Offerings>
          <Title>Cultural Sites</Title>
          <Description>
            I'm a paragraph. Click here to add your own text and edit me.
          </Description>
        </Offerings>
        <Offerings>
          <Title>Market Tour</Title>
          <Description>
            I'm a paragraph. Click here to add your own text and edit me.
          </Description>
        </Offerings>
        <Offerings>
          <Title>Leisure Activities</Title>
          <Description>
            I'm a paragraph. Click here to add your own text and edit me.
          </Description>
        </Offerings>
        <Offerings>
          <Title>Birds Safari</Title>
          <Description>
            I'm a paragraph. Click here to add your own text and edit me.
          </Description>
        </Offerings>
        <Offerings>
          <Title>Horse Riding </Title>
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

export default Activities;
