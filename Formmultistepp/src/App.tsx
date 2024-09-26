import React from "react";
import FormInit from "./components/FormInit";
import { Home } from "./components/Home"; // Agora estamos usando Home

export default function App() {
  return (
    <Home>
      <FormInit />
    </Home>
  );
}