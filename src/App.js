import "./App.css";
import Container from "./components/Container";
import UseState from "./views/UseState";
import UseEffect from "./views/UseEffect";
import UseContext from "./views/UseContext";
import { ThemeProvider } from "./context/ThemeContext";
import UseRef from "./views/UseRef";
import UseMemo from "./views/UseMemo";

const App = () => (
  <ThemeProvider>
    <Container title="React Hooks">
      <UseState />
      <UseEffect />
      <UseContext />
      <UseRef />
      <UseMemo />
    </Container>
  </ThemeProvider>
);

export default App;
