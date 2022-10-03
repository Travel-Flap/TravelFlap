// import Dropdown from 'react-bootstrap/Dropdown';

// export const MultiDropdown = () => {
// 	return (
// 		<div className='multi_dropdown'>
// 			<Dropdown>
// 				<Dropdown.Toggle variant="success" id="dropdown-basic">
// 					Dropdown Button
// 				</Dropdown.Toggle>

// 				<Dropdown.Menu>
// 					<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
// 					<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
// 					<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
// 				</Dropdown.Menu>
// 			</Dropdown>
// 		</div>

// 	);
// }

// export default BasicExample;


import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";
import "./Dropdown.css";

export const MultiDropdown = () => {
	const langOptions = [
		{ value: "EN", label: "EN" },
		{ value: "HINDI", label: "HINDI" },
		{ value: "SANSKRIT", label: "SANSKRIT" },
	];

	const currencyOptions = [
		{ value: "INR", label: "INR" },
		{ value: "INR", label: "INR" },
		{ value: "AUD", label: "AUD" },
	];

	return (
		<div className="">
			<div className=" selectDiv ">
				{/* <span> */}
				<Select className="select_div1" options={langOptions} placeholder="Price" />
				{/* </span> */}
				{/* <span> */}
				<Select className="select_div2" options={currencyOptions} placeholder="Location" />
				<Select className="select_div3" options={currencyOptions} placeholder="Ratings" />
				<Select className="select_div4" options={currencyOptions} placeholder="Distance from center" />
				<Select className="select_div5" options={currencyOptions} placeholder="Reviews" />
				{/* </span> */}
			</div>

		</div>
	);
}
