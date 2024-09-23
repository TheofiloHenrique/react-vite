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
  Calculos,
  SimpleForm,
} from "./components/Events";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <>
      <SimpleForm />
      {/* <Cabeça />
      <UserDetails />
      <Meio />
      <Pe />
      <ClickButton />
      <KeyDownComponent />
      <InputField />
      <FocusBlurComponent />
      <MouseNaDiv />
      <Calculos /> */}
    </>
  );
}

export default App;
