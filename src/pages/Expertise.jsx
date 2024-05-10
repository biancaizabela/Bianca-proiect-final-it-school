import React from 'react';
import { Layout } from '../components/Layout';

export function Expertise() {
  return (
    <>
      {/* Instanțiem Layout, dandu-i copii.*/}
      <Layout>
        <h1 >Expertise</h1> <br></br>
        <h4> Our lawyers have wide experience in dealing with complex and sophisticated legal matters. </h4> <br></br>
        <li> Litigation & Arbitration </li> <br></br>
        <li> Banking & Finance </li> <br></br>
        <li> Commercial </li> <br></br>
        <li> Corporate / Mergers & Acquisitions </li> <br></br>
        <li> Employment </li> <br></br>
        <li> Environment & Regulatory </li> <br></br>
        <li> IT/Technology & Communications </li> <br></br>

        <div className="image" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
    				<img src="https://plus.unsplash.com/premium_photo-1661540409860-fe00bb21a51c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        			alt="lawyer" 
        			style={{ width: "600px", height: "auto", borderRadius: "10px" }} 
    				/>
				</div>

      </Layout>
    </>
  );
}
