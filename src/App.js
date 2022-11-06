import Navbar from "./components/Navbar";
import { HomeScreen } from "./screens/home";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import ClothesScreen from "./screens/clothes";

function PageHeader() {
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
        <Route path="/" element={<PageHeader />}>
          <Route index element={<HomeScreen />} />
          <Route path="/clothes" element={<ClothesScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
