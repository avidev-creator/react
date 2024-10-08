import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "../src/appwrite/auth";
import { login, logout } from "../src/store/authSlice";
import { Footer, Header } from "./components";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <>
      <div className="w-full h-screen text-white">Appwrite Working</div>
      <div className="w-full h-screen fixed flex top-[5%]">
        <Header />
        {/* Outlet */}
        <Footer />
      </div>
    </>
  ) : null;
}

export default App;
