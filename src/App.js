import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";

//Components
import { Wheel } from "react-custom-roulette";
import Form from "./Form";
//Style and Motion
import "./App.css";
import { AnimatePresence, motion } from "framer-motion";
// Data
import { data, getResult } from "./data";

const variants = {
  closed: { opacity: 0, height: 0 },
  open: { opacity: 1, height: "auto" },
};

const scaleDown = {
  closed: { scale: 1.2, opacity: 0 },
  open: { scale: 0.8, opacity: 1, transition: { duration: 2 } },
};

function App() {
  const [mustSpin, setMustSpin] = useState(false);
  const [resultNumber, setResultNumber] = useState();
  const [resultIsReady, setResultIsReady] = useState(false);
  const [buttonIsEnabled, setButtonIsEnabled] = useState(true);
  const [footerIsDisplayed, setFooterIsDisplayed] = useState(true);

  const onClick = () => {
    setButtonIsEnabled(false);
    setResultIsReady(false);
    const randomNumber = Math.floor(Math.random() * 9);
    setResultNumber(randomNumber);
    console.log(`random number is ${randomNumber}`);

    setMustSpin(true);
  };

  const onStopSpinning = () => {
    setButtonIsEnabled(true);
    setResultIsReady(true);
    setMustSpin(false);
  };

  return (
    <div className="wrapper">
      <Switch>
        <Route path="/" exact>
          <motion.div
            className="App"
            variants={scaleDown}
            initial="closed"
            animate="open"
          >
            <AnimatePresence>
              <div className="wheel">
                <Wheel
                  mustStartSpinning={mustSpin}
                  prizeNumber={resultNumber}
                  data={data}
                  backgroundColors={[
                    "#034b94",
                    "#034b94",
                    "#034b94",
                    "#034b94",
                    "#034b94",
                    "#034b94",
                    "#f0b643",
                  ]}
                  radiusLineColor={"#12081f"}
                  outerBorderColor={"#12081f"}
                  textColors={[
                    "#f6eee7",
                    "#f6eee7",
                    "#f6eee7",
                    "#f6eee7",
                    "#f6eee7",
                    "#f6eee7",
                    "#12081f",
                  ]}
                  textDistance={80}
                  onStopSpinning={onStopSpinning}
                  perpendicularText={true}
                />{" "}
              </div>
              <div className="overview">
                <h1 className="dare-title">Crazy-Dare - January 2022</h1>
                <p>Spin the wheel and follow the instructions.</p>
              </div>
              <motion.button
                whileHover={{
                  scale: buttonIsEnabled ? 1.2 : 1,
                  transition: { type: "spring", stiffness: 600 },
                }}
                onClick={onClick}
                disabled={buttonIsEnabled ? undefined : "disabled"}
              >
                {buttonIsEnabled ? "Spin!" : "Wait…"}
              </motion.button>

              {resultIsReady && (
                <motion.div
                  className="result"
                  variants={variants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <p>
                    Copy and paste the following text in your platform and
                    complete the dare:
                  </p>
                  <div className="code-block">
                    <code>
                      {`${resultNumber + 1}: ${getResult(resultNumber)} `}
                      https://crazydare.github.io/crazy-dare/
                    </code>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </Route>
        <Route path="/form">
          <Form></Form>
        </Route>
      </Switch>

      {footerIsDisplayed && (
        <footer>
          <Link to="/form" onClick={() => setFooterIsDisplayed(false)}>
            Get notified of new games.
          </Link>
        </footer>
      )}
    </div>
  );
}

export default App;
