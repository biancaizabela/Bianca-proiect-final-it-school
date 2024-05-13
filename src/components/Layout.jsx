import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout(props) {
	return (
		<div className="main-container">
			<Header />
			<main className="container pt-5 pb-5">{props.children}</main>
			<Footer />
		</div>
	);
}
