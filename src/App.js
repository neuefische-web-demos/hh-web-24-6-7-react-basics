import Button from "./components/Button";
import "./App.css";

function PageContainer() {
  return (
    <main>
      <Button />
      <Button />
    </main>
  );
}

function App() {
  return (
    <>
      <header>Header</header>
      <PageContainer />
      <footer>Footer</footer>
    </>
  );
}

export default App;
