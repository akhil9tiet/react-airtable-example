import React, { useRef } from "react";
import base from "../api/base";

export default function AddNewForm() {
	const nameRef = useRef();
	const contactRef = useRef();
	const ageRef = useRef();
	const professionRef = useRef();
	const picRef = useRef();
	const statusRef = useRef();
	const startDateRef = useRef();

	const addProspect = (e) => {
		e.preventDefault();
		const Name = nameRef.current.value;
		const Contact = contactRef.current.value;
		const Age = ageRef.current.value;
		const Profession = professionRef.current.value;
		const Pic = picRef.current.value;
		const Status = statusRef.current.value;
		const StartDate = startDateRef.current.value;

		// base("Prospects").create({ Name, Contact, Age, Profession, Pic, Status, StartDate }, (err, record) => {
		// 	if (err) {
		// 		console.error(err);
		// 		return;
		// 	}
		// 	prompt(record.getId());
		// });

		const payload = {
			records: [
				{
					fields: {
						Name: Name,
						Contact: Contact,
						Pic: [
							{
								url: Pic,
							},
						],
						Status: Status,
						Age: Age,
						Profession: Profession,
						StartDate: StartDate,
					},
				},
			],
		};
		console.log(JSON.stringify(payload));

		base("Prospects").create(payload, (err, record) => {
			if (err) {
				console.error(err);
				return;
			}
			prompt(record.getId());
		});
	};

	return (
		<div className='form'>
			<h1>Add new Prospect </h1>
			<form>
				<div>
					<label>Name</label>
					<input type='text' ref={nameRef} />
				</div>
				<div>
					<label>Contact</label>
					<input type='text' ref={contactRef} />
				</div>
				<div>
					<label>Age</label>
					<input type='number' ref={ageRef} />
				</div>
				<div>
					<label>Profession</label>
					<input type='text' ref={professionRef} />
				</div>
				<div>
					<label>Pic</label>
					<input type='file' ref={picRef} />
				</div>
				<div>
					<label>Status</label>
					<input type='text' ref={statusRef} />
				</div>
				<div>
					<label>Start Date</label>
					<input type='date' ref={startDateRef} />
				</div>
				<button onClick={addProspect} type='submit'>
					Submit
				</button>
			</form>
		</div>
	);
}
