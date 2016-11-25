// Example: 1000000 = 1M
Number.prototype.formatCount = function(d){
	var num = parseInt(this);	// In case num was float
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
String.prototype.formatCount = function(d){
	var num = parseInt(this);	// In case num was string|float
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
// Example: 1000000.5090 = 1,000,000.50(09)
Number.prototype.formatMoney = function(c, y, d, t){
	var n = this, 
		c = isNaN(c = Math.abs(c)) ? 2 : c, 
		d = d == undefined ? "." : d, 
		t = t == undefined ? "," : t,
		y = y == undefined ? ''	 : ' ' + y,
		s = n < 0 ? "-" : "", 
		i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))), 
		j = (j = i.length) > 3 ? j % 3 : 0;
   	return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "") + y;
};
String.prototype.formatMoney = function(c, y, d, t) {
	var n = this.replace(/[\s\,]/g, ''), 
		c = isNaN(c = Math.abs(c)) ? 2 : c, 
		d = d == undefined ? "." : d, 
		t = t == undefined ? "," : t,
		y = y == undefined ? ''	 : ' ' + y,
		s = n < 0 ? "-" : "", 
		i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))), 
		j = (j = i.length) > 3 ? j % 3 : 0;
   	return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "") + y;
};