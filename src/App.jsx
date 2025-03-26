import Header from "./componments/Header";
import Hero from "./componments/Hero";
import Technologies from "./componments/Techstack";
import Projects from "./componments/Projects";
import Footer from "./componments/footer";

function App() {
  return (
    <>
      <Header />
      <div className="bg-gray-950">
        <Hero />
      </div>
      <div className="h-screen">
        <Technologies />
      </div>
      <div className="h-screen">
        <Projects />
      </div>
      <Footer />
    </>
  );
}

export default App;
