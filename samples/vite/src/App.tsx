import axalogo from "@axa-fr/canopee-css/logo-axa.svg";
import { Navigate, NavLink, Route, Routes } from "react-router";
import Agent from "./Agent";
import "./App.css";
import Client from "./Client";
import "./Reset.css";

const App = () => {
  return (
    <>
      <header id="header">
        <img src={axalogo} role="presentation" alt="" />
        <NavLink className="navigationLink" to="/client">
          CLIENT
        </NavLink>
        <NavLink className="navigationLink" to="/agent">
          AGENT
        </NavLink>
      </header>

      <Routes>
        <Route index element={<Navigate to="/client" />} />
        <Route path="/client" element={<Client />} />
        <Route path="/agent" element={<Agent />} />
      </Routes>
    </>
  );
};

export default App;
