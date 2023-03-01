import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

import axios from "axios";

export default function Me() {
  // create a function that will send an axios request to the server
  // and then log the response

  const {
    register,
    handleSubmit,

    formState: { isSubmitting },
  } = useForm<FormData>();
  const [successMessage, SetSuccessMessage] = useState(true);
  const [disableBTN, SetdisableBTN] = useState(false);

  function sendEmail(data) {
    // event default
    event.preventDefault();
    SetdisableBTN(true);
    axios
      .post("https://eotlovohaqkady7.m.pipedream.net", {
        email: data.email,
        fname: data.fname,
        lname: data.lname,
        Company: data.Company,
        Message: data.Message,
      })
      .then(
        (response) => {
          console.log(response);
          SetSuccessMessage(false);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  function Myform() {
    return (
      <>
        <div className="container">
          <h2 className="sectionTitleTwo">Get In Touch</h2>
        </div>

        <div className="container formcontainer">
          <form onSubmit={handleSubmit(sendEmail)}>
            <div className="row">
              <div className="col-md-6">
                <div className="formGroup">
                  <label htmlFor="name">First Name</label>
                  <input
                    type="text"
                    name="fname"
                    id="fname"
                    {...register("fname")}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="formGroup">
                  <label htmlFor="name">Last Name</label>
                  <input
                    type="text"
                    name="lname"
                    id="lname"
                    {...register("lname")}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="formGroup">
                  <label htmlFor="name">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    {...register("email")}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="formGroup">
                  <label htmlFor="name">Company</label>
                  <input
                    type="text"
                    name="Company"
                    id="Company"
                    {...register("Company")}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="formGroup">
                  <label htmlFor="name">Message</label>
                  <textarea
                    id="Message"
                    name="Message"
                    {...register("Message")}
                  />
                </div>
              </div>
              <div className="formGroup">
                {/* if button is disabled show loading spinner else show button  */}

                {disableBTN ? (
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  <button type="submit" disabled={disableBTN}>
                    Submit
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }

  function ThankYouMessage() {
    useEffect(() => {
      // hide / show markers for testing
      let testMode = false;

      let ctx = gsap.context(() => {
        // create timeline
        let Hero_tl = gsap.timeline();
        Hero_tl.add("start", 0)
          .from(".frameOne", 1, { y: 50, opacity: 0 })
          .to(".frameOne", 1, {
            y: -50,
            opacity: 0,
            delay: 5,
          })
          .from(".frameTwo", 1, { y: 50, opacity: 0 });
      }); // <- scope!!!
    }, []);
    return (
      <>
        <div className="container formcontainer">
          <div className="thankYou">
            <div className="thankYouchild">
              <p className="frameOne">
                Why do programmers prefer dark mode?
                <br />
                Because light attracts bugs!
              </p>

              <h2 className="frameTwo">Thanks for reaching out! Chat soon! </h2>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <section id="Contact" className="GetInTouch">
      {successMessage ? <Myform /> : <ThankYouMessage />}
    </section>
  );
}
