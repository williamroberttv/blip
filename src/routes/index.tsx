import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddButton from "../components/AddButton";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Toast } from "../components/toast";
import Details from "../pages/details";
import Home from "../pages/Home";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:name" element={<Details />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
      <Footer />
      <AddButton />
      <Toast />
    </BrowserRouter>
  );
};

export default AppRoutes;
