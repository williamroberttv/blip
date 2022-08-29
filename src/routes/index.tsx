import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
