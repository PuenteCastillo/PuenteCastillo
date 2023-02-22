import { useEffect } from "react";
import Image from "next/image";
import Self from "./images/memyself.png";
import Dots from "./images/dots.png";

export default function Me() {
  useEffect(() => {
    // hide / show markers for testing
    let testMode = false;

    let scrollAnime = gsap.context(() => {
      // create timeline
      let about_lt = gsap.timeline();
      about_lt
        .add("start", 0)
        .from(".background_border", 3.5, { x: 30 }, "start")
        .from(".dots", 3.5, { x: -50, y: -50 }, "start")
        .from(".bg_color", 3.5, { width: 0 }, "start");

      // create scroll trigger
      ScrollTrigger.create({
        animation: about_lt,
        trigger: ".Me",
        // pin: ".hero",
        scroller: ".child",
        start: "top center",
        end: "center center",
        scrub: 1,
        markers: testMode,
      });
    }); // <- scope!!!

    // ctx.revert(); // cleanup!
  }, []);

  return (
    <section className="Me">
      <div className="center">
        <div className="container positionRel">
          <div className="bg_color"></div>
          <div className="row">
            <div className="col-lg-5 order-1 order-lg-0">
              <div className="copy_container">
                <div className="center_items">
                  <h2>Hello World </h2>
                  <h1>
                    I am <br /> J.P Castillo
                  </h1>

                  <a href="#ContactContact" className="them-btn">
                    Hire Me
                  </a>
                  {/* <a href="#" className="them-btn">
                    Resume
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-lg-7 order-0 order-lg-1 positionRE">
              <div className="right-container">
                <Image className="dots" src={Dots} alt="Dots" />
                <div className="img_container">
                  <Image src={Self} alt="logo" />
                </div>
                <div className="background_border"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container aboutFooter">
        <h2>About</h2>
        <div className="">
          <p>
            Full Stack Web Developer with a background in Photography,
            videography, and marketing. Effective at combining creativity and
            problem solving to develop user-friendly applications. Known among
            staff for strong wit and attention to detail no matter the
            complexity of the project.
          </p>
        </div>
      </div>
    </section>
  );
}
