import "./index.css";
// Component
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Workprocess from "./Components/Workprocess";
import Objective from "./Components/Objective";
import Scope from "./Components/Scope";
import Results from "./Components/Results";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="bg-BgBanner bg-fixed bg-cover bg-no-repeat h-auto">
      <Navbar/>
      <Banner />
      <Workprocess/>
      <Objective/>
      <Scope/>
      <Results/>
      <Footer/>
    </div>
  );
}

export default App;
