import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/headers/Header";
import HomeScreen from "./components/screens/homeScreen/HomeScreen";
import Sidebar from "./components/sidebar/Sidebar";
import Download from "./Download";
import "./_app.scss"
export default function App() {
  return (
    <>
      {/* <Header />
      <div className="app__container border border-info">
        <Sidebar />
        <Container fluid className="app__main border border-warning">
          <HomeScreen />
        </Container>
      </div> */}
      <Download/>
    </>  
  );
}
