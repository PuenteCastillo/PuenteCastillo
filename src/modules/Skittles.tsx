import Image from "next/image";

import { useEffect, useRef } from "react";

// logos
import JS_logo from "../images/resized_icons/JS.png";
import CSS_logo from "../images/resized_icons/css.png";
import Express_logo from "../images/resized_icons/express.png";
import Github_logo from "../images/resized_icons/github.png";
import Google_logo from "../images/resized_icons/google.png";
import Gsap_logo from "../images/resized_icons/Gsap.png";
import Heroku_logo from "../images/resized_icons/heroku.png";
import HTML_logo from "../images/resized_icons/html.png";
import Jquery_logo from "../images/resized_icons/jquery.png";
import Lightoom_logo from "../images/resized_icons/lightroom.png";
import Mongodb_logo from "../images/resized_icons/mongodb.png";
import NextJS_logo from "../images/resized_icons/nextjs.png";
import NodeJS_logo from "../images/resized_icons/nodejs.png";
import Photoshop_logo from "../images/resized_icons/photoshop.png";
import PHP_logo from "../images/resized_icons/php.png";
import Premier_logo from "../images/resized_icons/premier.png";
import React_logo from "../images/resized_icons/reacr.png";
import Sass_logo from "../images/resized_icons/sass.png";
import SQL_logo from "../images/resized_icons/sql.png";
import Wordpress_logo from "../images/resized_icons/wordpress.png";
import XD_logo from "../images/resized_icons/xd.png";

export default function Skittles() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".still-box", 1, {
        y: 400,
        opcaity: 0,
        stagger: {
          // grid: [7, 15],
          // from: "center",
          amount: 1,
        },
        scrollTrigger: {
          // animation: box_tl,
          trigger: ".Skittles",
          scroller: ".child",
          start: "-400 bottom",
          end: "95% bottom",
          scrub: 1,
          // markers: true,
        },
      });
    }); // <- scope!!!

    return () => ctx.revert(); // cleanup!
  });

  return (
    <>
      <section className="Skittles">
        <div className="container">
          <h2 className="sectionTitle"> Skillzz</h2>
          <div className="row">
            <div className="col-6 col-lg-4 col-xl-3">
              <div className="still-box skill_boxOne">
                <div className="still-child">
                  <Image src={JS_logo} alt="React Logo" />
                  <p>Javascript</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-4 col-xl-3">
              <div className="still-box">
                <div className="still-child">
                  <Image src={HTML_logo} alt="React Logo" />
                  <p>HTML</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-4 col-xl-3">
              <div className="still-box">
                <div className="still-child">
                  <Image src={CSS_logo} alt="React Logo" />
                  <p>CSS</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-4 col-xl-3">
              <div className="still-box">
                <div className="still-child">
                  <Image src={PHP_logo} alt="React Logo" />
                  <p>PHP</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-4 col-xl-3">
              <div className="still-box">
                <div className="still-child">
                  <Image src={Mongodb_logo} alt="React Logo" />
                  <p>Mongodb</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-4 col-xl-3">
              <div className="still-box">
                <div className="still-child">
                  <Image src={Express_logo} alt="React Logo" />
                  <p>Express</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-4 col-xl-3">
              <div className="still-box">
                <div className="still-child">
                  <Image src={React_logo} alt="React Logo" />
                  <p>React</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-4 col-xl-3">
              <div className="still-box">
                <div className="still-child">
                  <Image src={NodeJS_logo} alt="React Logo" />
                  <p>Node</p>
                </div>
              </div>
            </div>

            <div className="col-6 col-lg-4 col-xl-3">
              <div className="still-box">
                <div className="still-child">
                  <Image src={Jquery_logo} alt="React Logo" />
                  <p>Jquery</p>
                </div>
              </div>
            </div>

            <div className="col-6 col-lg-4 col-xl-3">
              <div className="still-box">
                <div className="still-child">
                  <Image src={NextJS_logo} alt="React Logo" />
                  <p>NextJS</p>
                </div>
              </div>
            </div>

            <div className="col-6 col-lg-4 col-xl-3">
              <div className="still-box">
                <div className="still-child">
                  <Image src={HTML_logo} alt="React Logo" />
                  <p>HTML</p>
                </div>
              </div>
            </div>

            <div className="col-6 col-lg-4 col-xl-3">
              <div className="still-box">
                <div className="still-child">
                  <Image src={Wordpress_logo} alt="React Logo" />
                  <p>Wordpress</p>
                </div>
              </div>
            </div>

            <div className="col-6 col-lg-4 col-xl-3">
              <div className="still-box">
                <div className="still-child">
                  <Image src={Sass_logo} alt="React Logo" />
                  <p>Sass</p>
                </div>
              </div>
            </div>

            <div className="col-6 col-lg-4 col-xl-3">
              <div className="still-box">
                <div className="still-child">
                  <Image src={SQL_logo} alt="React Logo" />
                  <p>SQL</p>
                </div>
              </div>
            </div>

            <div className="col-6 col-lg-4 col-xl-3">
              <div className="still-box">
                <div className="still-child">
                  <Image src={Github_logo} alt="React Logo" />
                  <p>Github</p>
                </div>
              </div>
            </div>

            <div className="col-6 col-lg-4 col-xl-3">
              <div className="still-box">
                <div className="still-child">
                  <Image src={Heroku_logo} alt="React Logo" />
                  <p>Heroku</p>
                </div>
              </div>
            </div>

            <div className="col-6 col-lg-4 col-xl-3">
              <div className="still-box">
                <div className="still-child">
                  <Image src={Gsap_logo} alt="React Logo" />
                  <p>Green Sock</p>
                </div>
              </div>
            </div>

            <div className="col-6 col-lg-4 col-xl-3">
              <div className="still-box">
                <div className="still-child">
                  <Image src={Photoshop_logo} alt="React Logo" />
                  <p>Photoshop</p>
                </div>
              </div>
            </div>

            <div className="col-6 col-lg-4 col-xl-3">
              <div className="still-box">
                <div className="still-child">
                  <Image src={Lightoom_logo} alt="React Logo" />
                  <p>Lightroom</p>
                </div>
              </div>
            </div>

            <div className="col-6 col-lg-4 col-xl-3">
              <div className="still-box">
                <div className="still-child">
                  <Image src={XD_logo} alt="React Logo" />
                  <p>XD</p>
                </div>
              </div>
            </div>

            <div className="col-6 col-lg-4 col-xl-3">
              <div className="still-box">
                <div className="still-child">
                  <Image src={Premier_logo} alt="React Logo" />
                  <p>Premier</p>
                </div>
              </div>
            </div>

            <div className="col-6 col-lg-4 col-xl-3">
              <div className="still-box">
                <div className="still-child">
                  <Image src={Google_logo} alt="React Logo" />
                  <p>Google</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
