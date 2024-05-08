import React from 'react';
import { Layout } from '../components/Layout';


export function About() {
  return (
    <>
      {/* Instanțiem Layout, dandu-i copii.*/}
      <Layout>
        <h1 className="color">About us</h1>
        <h4> Colcer si Asociatii is a top Romanian business law firm, with extensive experience in domestic and international complex legal matters.
        </h4>
        <h4> Key Information: </h4>
        <p> 
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
      </Layout>
    </>
  );
}
