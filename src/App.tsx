import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Homepages/Home";
import Offer from "./Component/Homepages/Offer";
import Method from "./Component/Homepages/Method";
import Completed from "./Component/Homepages/Completed";
import Test from "./Component/Homepages/Test";
import Aboutus from "./Component/Homepages/Aboutus";
import Team from "./Component/Homepages/Team";
import Testimonials from "./Component/Homepages/Testimonials";
import Newsletter from "./Component/Homepages/Newsletter";
import Blog from "./Component/Homepages/Blog";
import Footer from "./Component/Footer/Footer"
import Explore from "./Component/Pages/Explore";
import Project from './Component/Pages/Project';
import About from "./Component/Pages/About";
import Contact from "./Component/Pages/Contact";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Offer" element={<Offer />} />
          <Route path="Method" element={<Method />} />
          <Route path="Completed" element={<Completed />} />
          <Route path="Test" element={<Test />} />
          <Route path="Aboutus" element={<Aboutus />} />
          <Route path="Team" element={<Team />} />
          <Route path="Testimonials" element={<Testimonials />} />
          <Route path="Newsletter" element={<Newsletter />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="Explore" element={<Explore/>} />
          <Route path="Project" element={<Project/>} />
          <Route path="About" element={<About/>} />
          <Route path= "Contact" element={<Contact/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
