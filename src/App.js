import "./App.css";
import { StyleElement } from "./use-Ref/StyleElement";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StyleElement />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
