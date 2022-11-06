import Navbar from "./components/Navbar";
import Center from "./components/Center";
import { HomeScreen } from "./screens/home";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <div className="container">
      <Navbar />
      <Center />
      <Outlet />
    </div>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomeScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
