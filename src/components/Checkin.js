import styled from "styled-components";

const Checkin = () => {
  return (
    <Form>
      <FormFieldContainer>
        <label>Check In </label>
        <input type="date" name="" id="" />
      </FormFieldContainer>
      <FormFieldContainer>
        <label>Check Out </label>
        <input type="date" name="" id="" />
      </FormFieldContainer>
      <FormFieldContainer>
        <label>Adult </label>
        <Input type="number" name="" id="" value={1} />
      </FormFieldContainer>
      <FormFieldContainer>
        <label>Child </label>
        <Input type="number" name="" id="" value={0} />
      </FormFieldContainer>
      <FormFieldContainer>
        <label>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</label>
        <Button>Search</Button>
      </FormFieldContainer>
    </Form>
  );
};

// Form
const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 80%;
  margin: 40px auto;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }
`;

// Form Fields Container
const FormFieldContainer = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 40%;
    margin: 2px 20px;
  }
  * {
    padding: 6px;
    margin-top: 2px;
  }
  label {
    width: 100%;
    font-size: 10px;
  }
`;

// Input for variable width
const Input = styled.input`
  width: 60px;
  @media (max-width: 768px) {
    width: 75%;
  }
`;

// Search Button
const Button = styled.a`
  text-align: center;
  width: 11rem;
  background: black;
  color: white;
  border: 1px solid white;
  display: ${(props) => props.show};
  @media (max-width: 768px) {
    padding: 1rem 4rem;
  }
`;

export default Checkin;
