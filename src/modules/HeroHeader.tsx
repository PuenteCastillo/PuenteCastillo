import Image from "next/image";
import { useEffect } from "react";

/// images
//import image from public file

import Clouds from "./images/clouds.png";
import Deer from "./images/deer.png";
import Lake from "./images/lake.png";
import Mounts from "./images/mounts.png";
import Sun from "./images/sun.png";
import Tree from "./images/trees.png";
import Placeholder from "./images/placeholder.png";
import CloudTwo from "./images/cloudsTwo.png";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger.js";
// gsap.registerPlugin(ScrollTrigger);

export default function HeroHeader() {
  useEffect(() => {
    // hide / show markers for testing
    let testMode = false;

    let ctx = gsap.context(() => {
      // create timeline
      let Hero_tl = gsap.timeline();
      Hero_tl.add("start", 0)
        .add("all", 0.2)
        .to(".Sun", 3.5, { y: 300, scale: 1.5 }, "all")
        .to(".Clouds, .CloudTwo", 3.5, { y: 200 }, "all")
        .to(".Lake", 3, { y: 400, scale: 1.2 }, "all")
        .to(".mounts", 2.5, { y: 100, scale: 1.2 }, "all")
        .to(".Tree", 2, { y: 40 }, "all")
        .to(".headerChild", 0.8, { y: -600 }, "start");

      // create scroll trigger
      ScrollTrigger.create({
        animation: Hero_tl,
        // trigger: ".trigger",
        // pin: ".hero",
        scroller: ".child",
        start: "center center",
        end: "1000 center",
        scrub: 2,
        markers: testMode,
      });
    }); // <- scope!!!

    // ctx.revert(); // cleanup!
  }, []);

  return (
    <>
      <section className="hero">
        <div className="header-content">
          <div className="headerChild">
            <h1>
              Seemless Design <br />& <br /> Function
            </h1>
          </div>
        </div>
        <div className="hero_images">
          <Image className="CloudTwo" src={CloudTwo} alt="Clouds" priority />
          <Image className="Sun" src={Sun} alt="Sun" priority />

          <Image className="Lake" src={Lake} alt="Lake" priority />
          <Image className="Clouds" src={Clouds} alt="Cloud" priority />
          <Image className="mounts" src={Mounts} alt="Mounts" priority />
          <Image className="Tree" src={Tree} alt="Tree" priority />
          <Image className="deer" src={Deer} alt="Deer" priority />

          <Image
            className="main-image"
            src={Placeholder}
            alt="Placholder"
            priority
          />
        </div>
      </section>
    </>
  );
}
