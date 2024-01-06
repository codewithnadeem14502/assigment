import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import History from "../pages/History";
import PageNotFound from "../pages/PageNotFound";
import Details from "../pages/Details";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/history" element={<History />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="salarycard/:id" element={<Details />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default Layout;
