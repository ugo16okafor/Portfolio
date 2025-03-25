import Header from "./src/compoments/Header";
import Body from "./src/compoments/Body";
import Technologies from "./src/compoments/Techstack";
import Projects from "./src/compoments/Projects";
import Footer from "./src/compoments/footer";

function App() {
  return (
    <>
      <Header />
      <div className="bg-gray-950">
        <Body />
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
