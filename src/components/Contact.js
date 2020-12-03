import styled from "styled-components";

const Contact = () => {
  return (
    <ContainerStyled>
      <Heading>CONTACT US</Heading>
      <ContactInfoContainer>
        <ContactInfoItems>info@mysite.com</ContactInfoItems>
        <ContactInfoItems>
          500 Terry Francois Street, San Francisco, CA 94158
        </ContactInfoItems>
        <ContactInfoItems>Tel: 123-456-7890 </ContactInfoItems>
      </ContactInfoContainer>
      <Form>
        <Input type="text" placeholder="Name"></Input>
        <Input type="email" placeholder="E-Mail"></Input>
        <Input width={"100%"} type="text" placeholder="Subject"></Input>
        <textarea placeholder="Message"></textarea>
        <Button>Send</Button>
      </Form>
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
  margin: 100px auto 0 auto;
  padding: 100px 0;
  background: #f5f5f5;
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

//Contact Info Container
const ContactInfoContainer = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

//Contact Info Items
const ContactInfoItems = styled.p`
  width: 60%;
  font-weight: 300;
  font-size: 14px;
  font-style: italic;
  color: rgba(0, 0, 0, 0.8);
  line-height: 1.5;
  text-align: center;
  @media (max-width: 768px) {
    width: 78%;
    margin: 10px;
  }
`;

// Form
const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 40%;
  margin: 40px auto;
  flex-wrap: wrap;
  textarea {
    width: 100%;
    height: 150px;
    border: 1px solid #ccc;
    @media (max-width: 768px) {
      width: 80%;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

// Form Input
const Input = styled.input`
  width: ${(props) => props.width || "48%"};
  padding: 12px;
  border: 1px solid #ccc;
  margin: 12px 0;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

// Search Button
const Button = styled.a`
  text-align: center;
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
  background: black;
  color: white;
  border: 1px solid white;
  display: ${(props) => props.show};
  @media (max-width: 768px) {
    padding: 1rem 4rem;
    width: 80%;
  }
`;

export default Contact;
