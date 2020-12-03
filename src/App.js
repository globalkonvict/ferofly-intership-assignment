import "./App.css";
import Ferofly from "./components/Ferofly";
import Navbar from "./components/Navbar";
import Checkin from "./components/Checkin";
import About from "./components/About";
import Rooms from "./components/Rooms";
import Services from "./components/Services";
import Activities from "./components/Activities";
import Gallery from "./components/Gallary";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SimpleMap from "./components/GoogleMap";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Ferofly />
      <Checkin />
      <About />
      <Rooms />
      <Services />
      <Gallery />
      <Activities />
      <Reviews/>
      <Contact />
      <SimpleMap/>
      <Footer/>
    </div>
  );
}

export default App;
