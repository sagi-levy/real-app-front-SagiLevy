import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./about";
import { Route, Routes } from "react-router-dom";
import MyCards from "./components/myCards";
import SignUp from "./components/signUp";
import SignIn from "./components/signIn";
import SignOut from "./components/signOut";
import SignUpBiz from "./components/signUpBiz";

import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/protectedRoute";
import CreateCard from "./components/createCard";
import EditCard from "./components/editCard";

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      {/* <ToastContainer /> */}
      <header>
        <Navbar />
      </header>
      <main className="flex-fill container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="About" element={<About />}></Route>
          <Route
            path="my-cards"
            element={
              <ProtectedRoute onlyBiz>
                <MyCards />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="sign-up" element={<SignUp />}></Route>
          <Route path="create-card" element={<CreateCard />}></Route>
          <Route path="sign-in" element={<SignIn />}></Route>
          <Route path="sign-out" element={<SignOut />}></Route>
          <Route path="sign-up-biz" element={<SignUpBiz />}></Route>
          <Route
            path="/my-cards/edit/:id"
            element={
              <ProtectedRoute onlyBiz>
                <EditCard />
              </ProtectedRoute>
            }
          />{" "}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
