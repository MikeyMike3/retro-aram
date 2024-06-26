import React, { useState, useEffect } from "react";
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
let lifelineManaflowOverlap = false;

let archAngelStaffOverlapToggledOff = false;

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
				array[randomNumberDynamic].itemName === "Archangel's Staff" ||
				array[randomNumberDynamic].itemName === "Immortal Shieldbow" ||
				array[randomNumberDynamic].itemName === "Maw of Malmortius" ||
				array[randomNumberDynamic].itemName === "Sterak's Gage"
			) {
				lifelineManaflowOverlap = true;
			}
			if (array[randomNumberDynamic].itemName === "Archangel's Staff") {
				archAngelStaffOverlap = true;
			}

			// if (archAngelStaffOverlap) {
			// 	archAngelStaffOverlapToggledOff = false;
			// }
			//  else if (
			// 	array[randomNumberDynamic].itemName === "Seraph's Embrace"
			// ) {
			// 	seraphsEmbraceOverlap = true;
			// }

			// if (archAngelStaffOverlap || seraphsEmbraceOverlap) {
			// 	lifelineManaflowOverlap = true;
			// }
		}
	}

	return tempItemArray;
};

export const UltimateAram = () => {
	const [itemArray, setItemArray] = useState([]);
	const [plexoMode, setPlexoMode] = useState(false);

	const handlePlexoMode = (item) => {
		setPlexoMode(!item);
	};

	useEffect(() => {
		if (plexoMode) {
			bootsRate = 0;
		} else {
			bootsRate = 100;
		}
	}, [plexoMode]);

	const makeRandomItems = () => {
		tempItemArray = [];

		terminusOverlap = false;
		archAngelStaffOverlap = false;

		archAngelStaffOverlapToggledOff = false;

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

		if (!archAngelStaffOverlap) {
			getNewItem(manaflow, manaflowRate);
			archAngelStaffOverlapToggledOff = true;
		}

		if (lifelineManaflowOverlap && archAngelStaffOverlapToggledOff) {
			while (true) {
				let lastIndex = tempItemArray.length - 1;

				console.log(lastIndex);
				console.log(tempItemArray[lastIndex].itemName);

				if (tempItemArray[lastIndex].itemName === "Archangel's Staff") {
					console.log("POPPED", tempItemArray[lastIndex].itemName);
					tempItemArray.pop();

					getNewItem(manaflow, manaflowRate);
				} else {
					break;
				}
			}
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
			<div className="ultimate-aram-title glass">
				<h3>
					<span className="retro-span">Retro </span>
					<span className="future-span">Future </span>
					<span className="aram-span">Ultimate Aram</span>
				</h3>
			</div>

			<div className="ultimate-aram-description glass">
				<p>
					<span className="aram-span">Ultimate Aram</span> will
					<span className="randomize-span"> randomize</span> the items
					you have to build in game.
				</p>
				<p>
					First <span className="randomize-span">randomize</span> your
					champs in game, then come here and randomize your items.
				</p>
				<p>You can build the items in any order you would like.</p>
				<p>
					The item <span className="randomize-span">randomizer </span>
					is smart enough that it wont give you items that you can't
					build.
				</p>
			</div>
			<div className="ultimate-aram-item-container glass">
				{/* {itemArray.length === 0 && (
					<div className="ultimate-aram-item-array-empty">
						<h3>Click randomize below</h3>
					</div>
				)} */}

				<div className="ultimate-aram-item-grid">
					{itemArray.map((item) => (
						<UltimateAramItems
							key={item.itemName}
							itemName={item.itemName}
							img={item.img}
							itemGroup={item.itemGroup}
						/>
					))}
				</div>
				<div className="ultimate-aram-btn-container">
					<div className="idk-container">
						<button
							className="ultimate-aram-btn"
							onClick={makeRandomItems}
						>
							Randomize
						</button>
						<div className="ultimate-aram-checkbox-container">
							<input
								onChange={() => handlePlexoMode(plexoMode)}
								type="checkbox"
								id="plexoCheckbox"
							></input>
							<label
								htmlFor="plexoCheckbox"
								className="ultimate-aram-label"
							>
								Plexo Mode (No Boots)
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
