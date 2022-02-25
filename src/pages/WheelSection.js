import React, { useEffect, useState } from "react";

//Components
import { Wheel } from "react-custom-roulette";

import { AnimatePresence, motion } from "framer-motion";
// Data
import { data, results, textColors, backgroundColors } from "../data";

const variants = {
  closed: { opacity: 0, height: 0 },
  open: { opacity: 1, height: "auto" },
};

const scaleDown = {
  closed: { scale: 1.2, opacity: 0 },
  open: { scale: 0.9, opacity: 1, transition: { duration: 2 } },
};

const totalOptions = results.length;

const WheelSection = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [resultNumber, setResultNumber] = useState();
  const [numbers, setNumbers] = useState([]);
  const [resultIsReady, setResultIsReady] = useState(false);
  const [buttonIsEnabled, setButtonIsEnabled] = useState(true);

  const onClick = () => {
    setButtonIsEnabled(false);
    setResultIsReady(false);

    const randomNumber = () => {
      let number;

      do {
        number = Math.floor(Math.random() * 10);
      } while (numbers.includes(number));

      return number;
    };

    const newNumber = randomNumber();

    if (numbers.length < 9) {
      setNumbers((numbers) => [...numbers, newNumber]);
    } else {
      setNumbers([]);
    }

    setResultNumber(newNumber);
    setMustSpin(true);
  };

  const onStopSpinning = () => {
    setButtonIsEnabled(true);
    setResultIsReady(true);
    setMustSpin(false);
  };

  return (
    <>
      <header>
        <div className="header">
          <h1 className="title">Crazy Dare Game</h1>
          <div className="date">March 22</div>
        </div>
      </header>

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
              backgroundColors={backgroundColors}
              radiusLineColor={"#0a0115"}
              outerBorderColor={"#0a0115"}
              textColors={textColors}
              textDistance={80}
              onStopSpinning={onStopSpinning}
              perpendicularText={true}
            />{" "}
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
              <p>Copy and paste the following text and complete the dare:</p>
              <div className="code-block">
                <code>
                  {`${resultNumber + 1}: ${results[resultNumber]} `}
                  https://crazydare.github.io/crazy-dare/
                </code>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default WheelSection;
