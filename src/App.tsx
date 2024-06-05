import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Homepages/Home";
import Offer from "./Component/Homepages/Offer";
import Method from "./Component/Homepages/Method";
import Completed from "./Component/Homepages/Completed";
import Test from "./Component/Homepages/Test";
import Aboutus from "./Component/Homepages/Aboutus"
import Team from './Component/Homepages/Team';
import Testimonials from './Component/Homepages/Testimonials';
import Newsletter from './Component/Homepages/Newsletter';
import Blog from "./Component/Homepages/Blog";

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Offer />
    <Method />
    <Completed />
    <Test />
    <Aboutus />
    <Team />
    <Testimonials />
    <Newsletter />
    <Blog/>
    </BrowserRouter>
    </>
  )
}

