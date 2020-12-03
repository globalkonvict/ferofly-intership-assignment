import styled from "styled-components";
import img1 from "../assets/architecture-1477041_1280.jpg";
import img2 from "../assets/bedroom-389254_640.jpg";
import img3 from "../assets/osaka-5772121__340.jpg";
import img4 from "../assets/railroad-163518_640.jpg";

const Gallery = () => {
  return (
    <ContainerStyled>
      <Heading>GALLERY</Heading>
      <GalleryContainer>
        <Image src={img2} />
        <Image src={img4} />
        <Image src={img1} />
        <Image src={img3} />
        <Image src={img1} />
        <Image src={img2} />
        <Image src={img3} />
        <Image src={img4} />
      </GalleryContainer>
    </ContainerStyled>
  );
};

// Section Container
const ContainerStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
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
  margin-bottom: 80px;
`;

//gallery container
const GalleryContainer = styled.div`
  width: 60%;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

const Image = styled.img`
  width: 25%;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export default Gallery;
