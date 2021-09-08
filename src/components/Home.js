import React, { useState, useEffect } from "react";
import ShowAll from "./ShowAll";
import AddNewForm from "./AddNewForm";
import base from "../api/base";

export default function Home() {
	const [data, setData] = useState([]);

	useEffect(() => {
		base("Prospects")
			.select({ view: "Grid view" })
			.eachPage((records, fetchNextPage) => {
				setData(records);
				fetchNextPage();
			});
	}, []);

	// console.log(data);

	return (
		<div className='home'>
			<h1>React Airtable Example</h1>
			<ShowAll data={data} />
			<AddNewForm />
		</div>
	);
}
