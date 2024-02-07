import { Header } from "@axa-fr/design-system-react/client";
import { Suspense } from "react";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import Agent from "./Agent";
import Client from "./Client";

import "./App.css";
import "./Reset.css";

const App = () => (
  <>
    <Header
      navBarLinks={[
        <NavLink to="/client">CLIENT</NavLink>,
        <NavLink to="/agent">AGENT</NavLink>,
      ]}
      previousLink={<NavLink to="/client">Retour à la partie client</NavLink>}
    />
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
