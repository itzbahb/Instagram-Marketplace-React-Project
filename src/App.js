import Navbar from "./components/Navbar";
import { HomeScreen } from "./screens/home";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import SellerPage from "./components/SellerPage";

function Root() {
  return (
    <div className="container">
      <Navbar />
      <Outlet />
    </div>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<HomeScreen />} />
          <Route path="/store/:storeId" element={<SellerPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
