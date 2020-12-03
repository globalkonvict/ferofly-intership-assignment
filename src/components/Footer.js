import styled from "styled-components";

const Footer = () => {
  return (
    <ContainerStyled>
      <Note>© 2023 by Anton & Lily. Proudly created with Wix.com</Note>
    </ContainerStyled>
  );
};

// Section Container
const ContainerStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem;
  background: black;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

//Footer Note
const Note = styled.p`
  font-weight: 300;
  font-size: 16px;
  font-style: italic;
  color: white;
  line-height: 1.5;
  @media (max-width: 768px) {
    width: 78%;
  }
`;


export default Footer;
