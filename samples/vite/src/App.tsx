import { Header } from "@axa-fr/design-system-look-and-feel-react";
import { Suspense } from "react";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import Agent from "./Agent";
import Client from "./Client";

import "./App.css";
import "./Reset.css";
import "@axa-fr/design-system-look-and-feel-css/dist/common/tokens.scss";

const App = () => (
  <>
    <Header
      previousLink={<NavLink to="/agent">Retour à la partie client</NavLink>}
    >
      <NavLink to="/client">CLIENT</NavLink>,
      <NavLink to="/agent">AGENT</NavLink>,
    </Header>
    <Suspense>
      <Routes>
        <Route path="/" element={<Navigate to={"/client"} />} />
        <Route path="/client" element={<Client />} />
        <Route path="/agent" element={<Agent />} />
      </Routes>
    </Suspense>
  </>
);

export default App;
