import styled from "styled-components";
import fero from "../assets/fero1.png";

const Ferofly = () => {
  return (
    <ContainerStyled>
      <HeadingContainerStyled>
        <HeadingStyled>Ferofly</HeadingStyled>
        <SubtitleStyled>―Magnify your Journey―</SubtitleStyled>
      </HeadingContainerStyled>
      <Image />
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
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

// Heading container
const HeadingContainerStyled = styled.div`
  margin: 140px auto;
`;

// Heading
const HeadingStyled = styled.h1`
  font-style: italic;
  font-weight: 400;
  margin: 0 auto;
  padding-bottom: 10px;
  font-size: 40px;
  letter-spacing: 2px;
`;

// Subtitle
const SubtitleStyled = styled.p`
  font-style: oblique;
  font-weight: 300;
  margin: 0 auto;
  letter-spacing: 2px;
`;

// Image
const Image = styled.div`
  width: 60%;
  height: 60vh;
  background: url(${fero});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  @media (max-width: 768px) {
    width: 100%;
    height: 40vh;
  }
`;

export default Ferofly;
