import React, { useState } from "react";
import { useForm } from "react-hook-form";

import Image from "next/image";
import Self from "../../public/images/self.jpg";
import Dots from "../../public/images/dots.png";
import axios from "axios";

export default function Me() {
  // create a function that will send an axios request to the server
  // and then log the response
  //
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormData>();
  const [successMessage, SetSuccessMessage] = useState("");

  function sendEmail(data) {
    // event default
    event.preventDefault();

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
        },
        (error) => {
          console.log(error);
        }
      );
  }

  return (
    <section id="Contact" className="GetInTouch">
      {/* Create a form and run sendEmail funtction  */}
      <div className="container">
        <h2>Get In Touch</h2>
      </div>

      <div className="container formcontainer">
        <form onSubmit={handleSubmit(sendEmail)}>
          <div className="row">
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
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
