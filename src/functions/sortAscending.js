export function sortAscending(ranksArray, propertyName, setter) {
	if (Array.isArray(ranksArray)) {
		// Filter out any undefined elements or elements that don't have the specified property
		const validRanks = ranksArray.filter(
			(rank) =>
				rank &&
				typeof rank === "object" &&
				rank.hasOwnProperty(propertyName)
		);

		// Check if the filtered array is not empty
		if (validRanks.length > 0) {
			// Sort the valid ranks array based on the specified property
			const sortedRanks = validRanks.sort(
				(a, b) => a[propertyName] - b[propertyName]
			);

			// Call setDisplayRanks with the sorted array
			setter(sortedRanks);
		} else {
			console.error(
				`All elements in ranks are undefined or do not have '${propertyName}' property`
			);
		}
	} else {
		console.error("ranks is not an array or is undefined");
	}
}