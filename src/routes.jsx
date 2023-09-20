import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import HooksPage from "./HooksPage";
import Alert from "./alert";

export default (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/abc" element={<HooksPage />}></Route>
    <Route path="/alert" element={<Alert />}></Route>
  </Routes>
);
