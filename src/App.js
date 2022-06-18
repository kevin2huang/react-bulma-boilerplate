import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageOne from "./pages/page1";
import PageTwo from "./pages/page2";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageOne />} />
        <Route path="/two" element={<PageTwo />} />
      </Routes>
    </Router>
  );
};

export default App;
