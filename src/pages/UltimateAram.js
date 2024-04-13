import React, { useEffect, useState } from "react";
import {
	annul,
	blight,
	boots,
	eternity,
	fatality,
	hydra,
	immolate,
	lifeline,
	manaflow,
	momentum,
	quicksilver,
	spellblade,
	stasis,
	unbounded,
	nonUnique,
} from "../components/LeagueItems";
import { UltimateAramItems } from "../components/UltimateAramItems";

// sets the chance of each item group chance out of 100 (if the number is 15 then theres a 15% chance of a item of that group gets added)

const annulRate = 15;
const blightRate = 15;
const eternityRate = 15;
const fatalityRate = 15;
const hydraRate = 15;
const immolateRate = 15;
const lifelineRate = 15;
const manaflowRate = 15;
const momentumRate = 15;
const quicksilverRate = 15;
const spellbladeRate = 15;
const stasisRate = 15;
const unboundRate = 15;

let bootsRate = 100;

let tempItemArray = [];

let terminusOverlap = false;
let archAngelStaffOverlap = false;
let seraphsEmbraceOverlap = false;
let lifelineManaflowOverlap = false;

let randomNumber100 = 0;
let randomNumberDynamic = 0;

const generateRandomNumber100 = () => {
	return Math.floor(Math.random() * 100) + 1;
};

const generateRandomNumberDynamic = (array) => {
	return Math.floor(Math.random() * array.length);
};

const getNewItem = (array, rate) => {
	if (tempItemArray.length < 6) {
		randomNumber100 = generateRandomNumber100();
		if (randomNumber100 <= rate) {
			randomNumberDynamic = generateRandomNumberDynamic(array);
			tempItemArray.push(array[randomNumberDynamic]);

			if (array[randomNumberDynamic].itemName === "Terminus") {
				terminusOverlap = true;
			} else if (
				array[randomNumberDynamic].itemName === "Archangel's Staff"
			) {
				archAngelStaffOverlap = true;
			} else if (
				array[randomNumberDynamic].itemName === "Seraph's Embrace"
			) {
				seraphsEmbraceOverlap = true;
			}

			if (archAngelStaffOverlap || seraphsEmbraceOverlap) {
				lifelineManaflowOverlap = true;
			}
		}
	}
};

export const UltimateAram = () => {
	const [itemArray, setItemArray] = useState([]);

	const makeRandomItems = () => {
		tempItemArray = [];

		terminusOverlap = false;
		archAngelStaffOverlap = false;
		seraphsEmbraceOverlap = false;
		lifelineManaflowOverlap = false;

		getNewItem(boots, bootsRate);

		getNewItem(annul, annulRate);

		getNewItem(blight, blightRate);

		getNewItem(eternity, eternityRate);

		if (!terminusOverlap) {
			getNewItem(fatality, fatalityRate);
		}

		getNewItem(hydra, hydraRate);

		getNewItem(immolate, immolateRate);

		getNewItem(lifeline, lifelineRate);

		if (!lifelineManaflowOverlap) {
			getNewItem(manaflow, manaflowRate);
		}

		getNewItem(momentum, momentumRate);

		getNewItem(quicksilver, quicksilverRate);

		getNewItem(spellblade, spellbladeRate);

		getNewItem(stasis, stasisRate);

		getNewItem(unbounded, unboundRate);

		while (tempItemArray.length < 6) {
			randomNumberDynamic = generateRandomNumberDynamic(nonUnique);
			if (tempItemArray.includes(nonUnique[randomNumberDynamic])) {
			} else {
				tempItemArray.push(nonUnique[randomNumberDynamic]);
			}
		}
		setItemArray(tempItemArray);
	};

	return (
		<div className="wrapper">
			{itemArray.map((item) => (
				<UltimateAramItems
					key={item.itemName}
					itemName={item.itemName}
					img={item.img}
					itemGroup={item.itemGroup}
				/>
			))}
			<button onClick={makeRandomItems}>Randomize</button>
		</div>
	);
};
