// Format counts captions (review, respects, views,...)
formatCount = function(n, d){
	num = parseInt(n);	// In case num was string
	num = (num)? num : 0; // In case parseInt produced NaN
	digits = d | 1;	// Default value for digits
	var si = [
			{ value: 1E18, symbol: "E" },	// Quintillion
			{ value: 1E15, symbol: "P" },	// Quadrillion
			{ value: 1E12, symbol: "T" },	// Trillion
			{ value: 1E9,  symbol: "B" },	// Billion
			{ value: 1E6,  symbol: "M" },	// Million
			{ value: 1E3,  symbol: "K" },	// Thousand
			{ value: 1E0,  symbol: "" }		// 0 to 999
		], 
		rx = /\.0+$|(\.[0-9]*[1-9])0+$/,
		i;

	for (i = 0; i < si.length; i++) {
		if (num >= si[i].value) {
			return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
		}
	}
	return num.toFixed(digits).replace(rx, "$1");
};