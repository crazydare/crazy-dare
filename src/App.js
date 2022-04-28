import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";

import Form from "./pages/Form";
import WheelSection from "./pages/WheelSection";
//Style and Motion
import "./App.css";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [footerIsDisplayed, setFooterIsDisplayed] = useState(true);

  return (
    <div className="wrapper">
      We have moved to a new page:
      <div className="code-block">
        <a href="https://wheelofdares.netlify.app/custom/5658/">
          https://wheelofdares.netlify.app/custom/5658/
        </a>
      </div>
      <a href="https://wheelofdares.netlify.app/custom/5658/">
        <motion.button
          whileHover={{
            scale: 1.2,
            transition: { type: "spring", stiffness: 600 },
          }}
        >
          Go to website
        </motion.button>
      </a>
    </div>
  );
}

export default App;
