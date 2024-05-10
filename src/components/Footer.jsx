import React from 'react';
import { Link } from 'react-router-dom';



export function Footer() {
  return (
    <footer className="absolute bottom-0 w-full">
        <div className="container flex justify-center items-center">
            <Link to="/contact"> © 2024 Colcer și Asociații - All rights reserved. </Link>
        </div>
    </footer>
  );
}

export default Footer;