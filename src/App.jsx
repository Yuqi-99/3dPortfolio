import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";
// import { Hero } from "src/components/Hero";
// import { Contact } from "src/components/Contact";
// import { Feedbacks } from "src/components/Feedbacks";
// import { Works } from "src/components/Works";
// import { Tech } from "src/components/Tech";
// import { Experience } from "src/components/Experience";
// import { About } from "src/components/About";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary max-w-[1440px]">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          {/* <Hero /> */}
        </div>
        {/* <About /> */}
        {/* <Experience /> */}
        {/* <Tech /> */}
        {/* <Works /> */}
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          {/* <Contact /> */}
          {/* <StarsCanvas /> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
