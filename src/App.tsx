import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Offer from "./Component/Offer";
import Method from "./Component/Method";
import Completed from "./Component/Completed";


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

