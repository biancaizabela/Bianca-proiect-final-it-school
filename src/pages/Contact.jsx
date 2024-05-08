import React from 'react';
import { Layout } from '../components/Layout';
import Header from '../components/Header';
import "./Contact.css"

export function Contact() {
  return (
    <>
      <Layout>

      <div className="d-flex">
      <div className="first">
        <ul>
          <li>
            <div>
              <span className="material-symbols-outlined">phone_iphone</span>
              <p>Mobil:</p>
            </div>
            <a href="tel:+40312248400">+40 31 224 8400 </a>
          </li>

          <li>
            <div>
              <span className="material-symbols-outlined">mail</span>
              <p>E-mail:</p>
            </div>
            <a href="mailto:office@colcer-asociatii.ro">office@colcer-asociatii.ro</a>
          </li>

          <li>
            <div>
              <span className="material-symbols-outlined">diversity_3</span>
              <p>Facebook:</p>
            </div>
            <a href="https://www.facebook.com/lawyer">Colcer și Asociații</a>
          </li>

          <li>
            <div>
              <span className="material-symbols-outlined">calendar_month</span>
              <p>Program:</p>
            </div>
            <p className="description">L-V 09-17</p>
          </li>

          <li>
            <div>
              <span className="material-symbols-outlined">location_on</span>
              <p>Sediul central:</p>
            </div>
            <a href="https://maps.app.goo.gl/TM9U8L7Paea1UP3W6" target="_blank">Bucharest</a>
          </li>
        </ul>
      </div>


        <div className="second">
          
            <h1 className="text">Contact us!</h1>

            <form className="text">
              <div className="mb-4">
                <label htmlFor="user_name" className="block mb-2 text-gray-800">Name</label>
                <input id="user_name" type="text" name="user_name" className="w-full border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-primary transition duration-300"/>
              </div>

              <div className="mb-4">
                <label htmlFor="user_email" className="block mb-2 text-gray-800">Email</label>
                <input id="user_email" type="email" name="user_email" className="w-full border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-primary transition duration-300"/>
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block mb-2 text-gray-800">Message</label>
                <textarea id="message" name="message" className="w-full border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-primary transition duration-300"></textarea>
              </div>

              <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-accent mx-auto block transition duration-300">Send message</button>
            </form>

        </div>
      </div>
      
      </Layout>
    </>
  );
}