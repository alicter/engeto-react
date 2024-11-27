import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router";
import FirstPage from "./routes/FirstPage";
import SecondPage from "./routes/SecondPage";
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(
  "Autor: Jakub Kunc e-mail: jjt.kunc@gmail.com telefon: 739 759 813"
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<FirstPage />} />
        <Route path="2" element={<SecondPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
reportWebVitals();
