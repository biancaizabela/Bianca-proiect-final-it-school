import React, { useState } from "react";
import { Layout } from "../components/Layout";
import Header from "../components/Header";
import "./Contact.css";


export function Contact() {
  return (
    <>
      <Layout>
      <h1> Contact us! </h1> <br></br>
        <div className="d-flex">
          <div className="first">
            <ul>
              <li>
                <div >
                  <span className="material-symbols-outlined">
                    phone_iphone
                  </span>
                  <p>Phone number:</p>
                </div>
                <a href="tel:+40312248400" style={{ color: "black"}}>+40 31 224 8400  </a>
              </li>

              <li>
                <div>
                  <span className="material-symbols-outlined">mail</span>
                  <p>E-mail:</p>
                </div>
                <a href ="mailto:office@colcer-asociatii.ro" style={{ color: "black"}}>
                  office@colcer-asociatii.ro
                </a>
              </li>

              <li>
                <div>
                  <span className="material-symbols-outlined">diversity_3</span>
                  <p>Facebook:</p>
                </div>
                <a href="https://www.facebook.com/lawyer" style={{ color: "black"}}>
                  Colcer și Asociații
                </a>
              </li>

              <li>
                <div>
                  <span className="material-symbols-outlined">
                    calendar_month
                  </span>
                  <p>Opening hours:</p>
                </div>
                <p className="description">Monday to Friday from 09:00 to 17:00 </p>
              </li>

              <li>
                <div>
                  <span className="material-symbols-outlined">location_on</span>
                  <p>Location:</p>
                </div>
                <a
                  href="https://maps.app.goo.gl/TM9U8L7Paea1UP3W6"
                  target="_blank"
                  style={{ color: "black"}}
                >
                  Bucharest
                </a>
              </li>
            </ul>
          </div>

          <div className="second">


            <form className="contact-form">
              <div>
                <label htmlFor="user_name" className="block mb-2 text-gray-800">
                  Name
                </label>{" "}
                <br></br>
                <input
                  id="user_name"
                  type="text"
                  name="user_name"
                  className="w-full border border-gray-400 rounded-md px-4 py-2"
                />
              </div>
              <br></br>
              <div className="mb-4">
                <label
                  htmlFor="user_email"
                  className="block mb-2 text-gray-800"
                >
                  Email
                </label>{" "}
                <br></br>
                <input
                  id="user_email"
                  type="email"
                  name="user_email"
                  className="w-full border border-gray-400 rounded-md px-4 py-2"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block mb-2 text-gray-800">
                  Message
                </label>{" "}
                <br></br>
                <textarea
                  id="message"
                  name="message"
                  className="w-full border border-gray-400 rounded-md px-5 py-2"
                ></textarea>
              </div>

              <button
                id="submitButton"
                type="submit"
                className="btn btn-secondary"
                onClick={() => alert("Your message was succesfully sent!")}
              >
                Send message
              </button>
            </form>


          </div>
        </div>
      </Layout>
    </>
  );
}
