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
