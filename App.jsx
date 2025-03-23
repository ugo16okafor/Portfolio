import Header from "./src/compoments/Header";
import Body from "./src/compoments/Body";
import Technologies from "./src/compoments/Techstack";
import Projects from "./src/compoments/Projects";
import Footer from "./src/compoments/footer";

function App() {
  return (
    <p>
      <div className="bg-gray-950">
        <Header />
        <Body />
        <Technologies />
        <Projects />
        <Footer />
      </div>
    </p>
  );
}

export default App;
