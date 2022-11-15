import Navbar from "./components/Navbar";
import { HomeScreen } from "./screens/home";
import { BrowserRouter, Routes, Route, Outlet, Navigate, useLocation } from "react-router-dom";
import SellerPage from "./components/SellerPage";
import DriverPage from "./components/DriverPage";
import LoginScreen from "./screens/login";
import UserContextProvider, { useUserContext } from "./contexts/user";
import axios from "axios";

function Root() {
  let { user } = useUserContext();
  let location = useLocation();

  axios.defaults({
    baseURL: 'https://some-domain.com/api/', //use this as the url of the backend
    timeout: 1000, 
    headers: {'Token': 'dsadadsadas'} //add your own headers
  });

  //make sure that once a user is logged in, the token is updated for him, in addition to handeling incase an unauthorized reuqest is done to reidrect the user to the login page.

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (location.pathname === '/' && user.type === 'Seller') {
    return <Navigate to={`/seller/${user.userId}`} />
  }

  if (location.pathname === "/" && user.type === "Buyer"){
    return <Navigate to={`/buyer/${user.userId}`} />
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
            <Route path="/buyer/:buyerId" element={<HomeScreen />} />
            <Route path="/seller/:sellerId" element={<SellerPage />} />
            <Route path="/driver/:driverId" element={<DriverPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
};

export default App;
