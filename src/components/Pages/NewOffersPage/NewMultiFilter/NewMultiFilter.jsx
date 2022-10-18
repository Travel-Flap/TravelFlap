


import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";
import "./NewMultiFilter.css";

export const NewMultiDropdown = () => {
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
			<div className=" newOffers_selectDiv ">
				{/* <span> */}
				<Select className="select_NewOffersdiv1" options={langOptions} placeholder="Price" />
				{/* </span> */}
				{/* <span> */}
				<Select className="select_NewOffersdiv2" options={currencyOptions} placeholder="Location" />
				<Select className="select_NewOffersdiv3" options={currencyOptions} placeholder="Ratings" />
				<Select className="select_NewOffersdiv4" options={currencyOptions} placeholder="Distance from center" />
				<Select className="select_NewOffersdiv5" options={currencyOptions} placeholder="Reviews" />
				{/* </span> */}
			</div>

		</div>
	);
}
