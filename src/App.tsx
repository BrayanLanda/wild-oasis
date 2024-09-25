import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Heading from "./ui/Heading";
import Input from "./ui/Input";
import Row from "./ui/Row";

const StyledApp = styled.main`
  padding: 20px;
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row as="horizontal">
          <Heading as="h1">The Wild Oasis</Heading>
          <div>
            <Heading as="h2">Check in and out</Heading>
            <Button onClick={() => alert("Hello")}>Check</Button>
            <Button onClick={() => alert("Check out")}>Check out</Button>
          </div>
        </Row>

        <Row as="vertical">
          <Heading as="h3">Form</Heading>
          <form>
            <Input type="number" placeholder="Number" />
            <Input type="number" placeholder="Number" />
          </form>
        </Row>
      </StyledApp>
    </>
  );
}
