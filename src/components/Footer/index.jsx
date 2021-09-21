import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import cn from "classnames";
import "./style.scss";
import SectionHeader from "../SectionHeader";
import SplitText from "../../utils/Split3.min.js";

import useOnScreen from "../../hooks/useOnScreen";

function Footer() {
  const ref = useRef();

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);
  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);
  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#location-text", {
        type: "lines",
        linesClass: "lineChildren",
      });

      const splitParent = new SplitText("#location-text", {
        type: "lines",
        linesClass: "lineParent",
      });
      gsap.fromTo(
        split.lines,
        { y: 200 },
        {
          duration: 1,
          y: 0,

          stagger: 0.1,
          ease: "power2",
        }
      );
    }
  }, [reveal]);
  return (
    <section className="footer" data-scroll-section>
      <SectionHeader title="Made in" />
      <h1
        ref={ref}
        className={cn("location", { "is-reveal": reveal })}
        id="location-text"
      >
        Rio De Janeiro
      </h1>
    </section>
  );
}
export default Footer;
