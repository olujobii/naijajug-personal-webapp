import Header from "./components/Header";
import About from "./components/About";
import Hobbies from "./components/Hobbies";
import Footer from "./components/Footer";
import Interests from "./components/Interests";
import "./styles/app.css";
function App() {
  return (
    <>
      <div className='main-content'>
        <Header />
        <main>
          <About />
          <Hobbies />
          <Interests />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
