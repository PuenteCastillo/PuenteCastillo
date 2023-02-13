import Image from "next/image";
import { useEffect } from "react";

/// images
import Clouds from "../../public/images/clouds.png";
import Deer from "../../public/images/deer.png";
import Lake from "../../public/images/lake.png";
import mounts from "../../public/images/mounts.png";
import Sun from "../../public/images/sun.png";
import Tree from "../../public/images/trees.png";
import Placeholder from "../../public/images/placeholder.png";
import CloudTwo from "../../public/images/cloudsTwo.png";

export default function HeroHeader() {
  useEffect(() => {
    console.log("hello");

    // hide / show markers for testing
    let testMode = false;

    gsap.to(".Sun", 3.5, {
      scrollTrigger: {
        // trigger: ".trigger",
        scroller: ".child",
        start: "center center",
        end: "bottom center",
        scrub: 1,
        markers: testMode,
      },
      y: 300,
      scale: 1.5,
    });
    gsap.to(".Clouds, .CloudTwo", 3.5, {
      scrollTrigger: {
        // trigger: ".trigger",
        scroller: ".child",
        start: "center center",
        end: "bottom center",
        scrub: 1,
        markers: testMode,
      },
      y: 200,
    });

    gsap.to(".Lake", 3, {
      scrollTrigger: {
        // trigger: ".trigger",
        scroller: ".child",
        start: "center center",
        end: "bottom center",
        scrub: 1,
        markers: testMode,
      },
      y: 400,
      scale: 1.2,
    });

    gsap.to(".mounts", 2.5, {
      scrollTrigger: {
        // trigger: ".trigger",
        scroller: ".child",
        start: "center center",
        end: "bottom center",
        scrub: 1,
        markers: testMode,
      },
      y: 100,
      scale: 1.2,
    });

    gsap.to(".Tree", 2, {
      scrollTrigger: {
        // trigger: ".trigger",
        scroller: ".child",
        start: "center center",
        end: "bottom center",
        scrub: 1,
        markers: testMode,
      },
      y: 40,
      //   scale: 1.3,
    });

    gsap.to(".headerChild", 0.5, {
      scrollTrigger: {
        // trigger: ".trigger",
        scroller: ".child",
        start: "center center",
        end: "bottom center",
        scrub: 3,
        markers: testMode,
      },
      y: -1000,
      //   delay: 3,
    });
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
          <Image className="CloudTwo" src={CloudTwo} />
          <Image className="Sun" src={Sun} />

          <Image className="Lake" src={Lake} />
          <Image className="Clouds" src={Clouds} />
          <Image className="mounts" src={mounts} />
          <Image className="Tree" src={Tree} />
          <Image className="deer" src={Deer} />

          <Image className="main-image" src={Placeholder} />
        </div>
      </section>
    </>
  );
}
