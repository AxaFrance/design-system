import { Header } from "@axa-fr/design-system-look-and-feel-react";
import { Navigate, NavLink, Route, Routes } from "react-router";

import Agent from "./Agent";
import "./App.css";
import Client from "./Client";
import "./Reset.css";

const App = () => (
  <>
    <Header
      previousLink={<NavLink to="/agent">Retour à la partie client</NavLink>}
    >
      <NavLink to="/client">CLIENT</NavLink>,
      <NavLink to="/agent">AGENT</NavLink>,
    </Header>
    <Routes>
      <Route index element={<Navigate to="/client" />} />
      <Route path="/client" element={<Client />} />
      <Route path="/agent" element={<Agent />} />
    </Routes>
  </>
);

export default App;
