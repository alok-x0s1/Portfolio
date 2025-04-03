export const formatCount = (num: number) => {
	if (num < 1000) return num.toString();

	const formatter = new Intl.NumberFormat("en-US", {
		notation: "compact",
		compactDisplay: "short",
	});

	return formatter.format(num);
};
