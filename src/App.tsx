import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Homepages/Home";
import Offer from "./Component/Homepages/Offer";
import Method from "./Component/Homepages/Method";
import Completed from "./Component/Homepages/Completed";


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
    </BrowserRouter>
    </>
  )
}

