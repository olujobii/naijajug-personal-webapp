import Header from "./components/Header";
import About from "./components/About";
import Hobbies from "./components/Hobbies";
import Footer from "./components/Footer";
import Interests from "./components/Interests";
import "./styles/app.css";
function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Hobbies />
        <Interests />
      </main>
      <Footer />
    </>
  );
}

export default App;
