import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Result from "./components/Result";
import Hero from "./components/Hero";
import CardContainer from "./components/CardContainer";

function App() {
  return (
    <>
      <Header />

      <BrowserRouter>
        <Hero />
        <Routes>
          <Route path="/" element={<CardContainer />} />
          <Route path="/:keyword" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
