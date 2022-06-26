import { Cta, Brand, Navbar } from "./components";
import {
  Footer,
  Blogs,
  Possibility,
  Features,
  WhatGpt3,
  Header,
} from "./containers";
import "./app.css";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGpt3 />
      <Features />
      <Possibility />
      <Cta />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
