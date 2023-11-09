import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainLayaut from "./components/mainLayaut/mainLayaut.component";
import { Register } from "./components/register.component";
import Login from "./components/login.component";
import Welcome from "./components/welcome.component";
import Home from "./components/mainLayaut/home.component";
import { ToastContainer } from "react-toastify";
import Schedule from "./components/schedule.component";
import BuyForm from "./components/buy.component";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ToastContainer />
          <Routes>
          <Route path="/" element={<MainLayaut/>}>
          <Route index element={<Welcome/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/schedule" element={<Schedule/>}></Route>
            <Route path="/buy" element={<BuyForm/>}></Route>
          </Route>
          </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
