import React, { Suspense } from "react";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Home = React.lazy(() => import("./components/Home"));
const WishList = React.lazy(() => import("./pages/WishList"));
const Register = React.lazy(() => import("./pages/Register"));
const Login = React.lazy(() => import("./pages/Login"));
const ForgottenPassword = React.lazy(() => import("./pages/ForgottenPassword"));
import Navbar from "./components/Navbar";
import SingleMenu from "./pages/menu/SingleMenu";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SingleMeal from "./pages/menu/SingleMeal";
import SearchResultDetails from "./pages/SearchResultDetails";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Spinner from "./components/Spinner";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <UserAuthContextProvider>
        <Navbar />

        <ScrollToTop />

        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/wishlist"
              element={
                <ProtectedRoute>
                  <WishList />
                </ProtectedRoute>
              }
            />
            <Route path="/forgotten-password" element={<ForgottenPassword />} />
            <Route path="/menu/:menuitem" element={<SingleMenu />} />
            <Route path="/menu/category/:name" element={<SingleMeal />} />
            <Route
              path="/search/:searchitem"
              element={<SearchResultDetails />}
            />
          </Routes>
          <ToastContainer />
        </Suspense>

        <Footer />
      </UserAuthContextProvider>
    </Router>
  );
}

export default App;
