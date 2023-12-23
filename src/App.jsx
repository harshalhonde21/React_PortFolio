import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  StarsCanvas,
  Footer,
  Woks
} from "./components";

function App() {
  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div className="relative z-0">
          <StarsCanvas />
          <About />
        </div>
        <Experience />
        <Tech />
        <Woks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
