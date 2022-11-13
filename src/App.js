import Navbar from "./components/Navbar";
import { HomeScreen } from "./screens/home";
import { BrowserRouter, Routes, Route, Outlet, Navigate, useLocation } from "react-router-dom";
import SellerPage from "./components/SellerPage";
import LoginScreen from "./screens/login";
import UserContextProvider, { useUserContext } from "./contexts/user";

function Root() {
  let { user } = useUserContext();
  let location = useLocation();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (location.pathname === '/' && user.type === 'Seller') {
    return <Navigate to='/' //fix this
  }

  return (
    <div className="container">
      <Navbar />
      <Outlet />
    </div>
  );
}

const App = () => {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/" element={<Root />}>
            <Route index element={<HomeScreen />} />
            <Route path="/store/:storeId" element={<SellerPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
};

export default App;
