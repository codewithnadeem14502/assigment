import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Card from "./Card";
import Catalog from "./Catalog";
import History from "./History";
import PageNotFound from "./PageNotFound";
import Navbar from "./Navbar";
import Details from "./Details";

const Layout = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<Card />} />
        <Route path="/history" element={<History />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="salarycard/:id" element={<Details />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default Layout;
