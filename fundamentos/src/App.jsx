import "./App.css";
import Cabeça from "./components/Header";
import Meio from "./components/MainContent";
import Pe from "./components/Footer";
import {
  ClickButton,
  KeyDownComponent,
  InputField,
  FocusBlurComponent,
  MouseNaDiv,
} from "./components/Events";

function App() {
  return (
    <>
      <Cabeça />
      <Meio />
      <Pe />
      <ClickButton />
      <KeyDownComponent />
      <InputField />
      <FocusBlurComponent />
      <MouseNaDiv />
    </>
  );
}

export default App;
