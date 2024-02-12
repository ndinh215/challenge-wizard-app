import Header from "$components/header/Header";
import Wizard from "$presentation/wizard/wizard.tsx";
import Container from "$components/container";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Wizard />
      </Container>
    </div>
  );
}

export default App;
