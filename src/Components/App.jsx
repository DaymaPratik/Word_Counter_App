import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import {Routes,Route} from 'react-router-dom';
import About from "./About/About";



const App = () => {
  return (
    <>
      <Navbar />
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
     </Routes>
      <Footer />
    </>
  );
};

export default App;
