import Container from "./components/Container";
import UseState from "./views/UseState";
import UseEffect from "./views/UseEffect";
import UseContext from "./views/UseContext";
import { ThemeProvider } from "./context/ThemeContext";
import UseRef from "./views/UseRef";

const App = () => (
  <ThemeProvider>
    <Container>
      <h1 className="title">React Hooks</h1>
      <UseState />
      <UseEffect />
      <UseContext />
      <UseRef />
    </Container>
  </ThemeProvider>
);

export default App;
