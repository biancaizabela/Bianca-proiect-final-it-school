import React from 'react';
import { Layout } from '../components/Layout';

export function Expertise() {
  return (
    <>
      {/* Instanțiem Layout, dandu-i copii.*/}
      <Layout>
        <h1 className="color">Expertise</h1>
        <h4> Our lawyers have wide experience in dealing with complex and sophisticated legal matters. </h4>
        <li> Litigation & Arbitration </li>
        <li> Banking & Finance </li>
        <li> Commercial </li>
        <li> Corporate / Mergers & Acquisitions </li>
        <li> Employment </li>
        <li> Environment & Regulatory </li>
        <li> IT/Technology & Communications </li>

      </Layout>
    </>
  );
}
