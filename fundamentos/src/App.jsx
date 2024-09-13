import { useState } from "react";
import "./App.css";
import Cabeça from "./components/Header";
import Meio from "./components/MainContent";
import Pe from "./components/Footer";

function App() {
  return (
    <>
      <Cabeça />
      <Meio />
      <Pe />
    </>
  );
}

export default App;
