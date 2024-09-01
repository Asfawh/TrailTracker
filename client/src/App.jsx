import { Fragment } from "react";

import { Navigate, Routes, Route } from "react-router-dom";

import AccountBar from "./components/AccountBar";

import AuthProvider from "./context/AuthContext";
import AppBar from "./components/AppBar";
// import NavBar from "./components/NavBar";
import Main from "./views/Main";
import Details from "./views/Details";
import UpdateForm from "./views/UpdateForm";
import MainList from "./views/MainList";

function App() {
  return (
    <AuthProvider>
      {/* <NavBar /> */}
      <AppBar />
      <AccountBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/trails" />} />
          <Route path="/trails" element={<MainList />} />
          <Route path="/trails/new" element={<Main />} />
          <Route path="/trails/:id" element={<Details />} />
          <Route path="/trails/:id/edit" element={<UpdateForm />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
