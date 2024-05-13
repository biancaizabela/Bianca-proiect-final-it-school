import React from 'react';
import { Layout } from '../components/Layout';

export function About() {
  return (
    <>
      {/* Instanțiem Layout, dandu-i copii.*/}
      <Layout>
        <h1 className="color">About us</h1> <br></br>
        <h4> Colcer si Asociatii is a top Romanian business law firm, with extensive experience in domestic and international complex legal matters. 
        </h4>
        <h4> <br></br> Key Information: </h4>
        <p>  <br></br>
        ■ 10 partners; </p>
        <p>
        ■ 39 lawyers, most of whom have also studied abroad;
        </p>
        <p>
        ■ Covering the full range of legal services;
        </p>
        <p> 
        ■ Having worked on many of the largest and most complex projects in the Romanian market in the past 3 years;
        </p>
        <p> 
        ■ One of the very few Romanian law firms growing in the market;
        </p>
        <p> 
        ■ Highly recommended  by international directories in 11 areas of law.  </p>

        <div className="image" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
    				<img src="https://plus.unsplash.com/premium_photo-1661756423422-4486e27eb6dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        			alt="lawyer" 
        			style={{ width: "500px", height: "auto", borderRadius: "10px" }} 
    				/>
				</div>
        
        <h4> We offer:</h4>

        <p> <br></br> ■ Integrity; </p>
        <p> ■ A Client-oriented approach; </p>
        <p> ■ Top quality services, including in highly regulated sectors; </p>
        <p> ■ A size allowing for the coverage of several large projects at the same time; </p>
        <p> ■ Very strong experience in both domestic and international complex projects, including in highly regulated sectors; </p>




      

      </Layout>
    </>
  );
}
