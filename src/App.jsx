/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginLayout from "./Components/Layout/LoginLayout";
import LayoutForQuestionAns from "./Components/Layout/LayoutForquestion&ans";
import Login from "./page/Login/Login";
import Questions from "./page/Questions/Questions";

const App = () => {
  // Define a function to determine which layout to render
  const renderLayout = (children) => {
    // Example logic to determine the layout
    if (window.location.pathname.includes("questions")) {
      return <LayoutForQuestionAns>{children}</LayoutForQuestionAns>;
    }
    return <LoginLayout>{children}</LoginLayout>;
  };
  return (
    <Router>
      {renderLayout(
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/questions" element={<Questions />} />
          {/* Other routes */}
        </Routes>
      )}
    </Router>
  );
};

export default App;
