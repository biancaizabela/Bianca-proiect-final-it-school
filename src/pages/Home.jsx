import React from "react";
import { Layout } from "../components/Layout";


export function Home() {
	return (
		<>
			{/* Instantiem Layout, dându-i copii. */}
			<Layout>
				<h1> Welcome to Colcer și Asociații! </h1> <br></br>
				
				<h2>
				Colcer și Asociații is a leading Romanian law firm, involved in many of the most complex projects in the country.
				</h2> <br></br>

				<h3> Colcer și Asociații team of lawyers includes a mix of highly experienced lawyers with in-depth knowledge of the Romanian market and of the specific regulatory and economic local environment. </h3>

				<div className="image" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
    				<img src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        			alt="lawyer" 
        			style={{ width: "500px", height: "auto", borderRadius: "15px" }} 
    				/>
				</div> <br></br>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae hic fugiat atque quidem eius molestiae vel repellendus aperiam, eligendi ipsam quas quia eveniet perferendis suscipit totam numquam maxime eum animi.
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos corporis accusantium consequuntur. Tempora sequi esse quidem nobis reiciendis quas odit vero! Necessitatibus eius nostrum praesentium eveniet commodi aut reprehenderit cum fuga ipsam blanditiis, laboriosam, eum incidunt dignissimos, minima ullam. Similique veritatis repellendus quaerat cum hic explicabo aspernatur harum, rem earum nulla eveniet suscipit nihil alias repellat fugit minus numquam natus accusantium magni vitae temporibus tenetur? At quam iste saepe facere corporis vitae placeat. Pariatur ad quo placeat fuga veniam animi ipsa blanditiis quas unde ducimus, voluptate voluptatum autem quibusdam, optio dolor minima illo repudiandae perspiciatis eius perferendis neque totam facere!
					
				</p>



			</Layout>


		</>
	);
}
