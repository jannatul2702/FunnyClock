function formatNumber(num) {
	let format = document.getElementById("format").value;

    switch(format) {
        case "dec":
            return getDecimalFormat(num);
        case "bin":
            return getBinFormat(num);
        case "hex":
            return getHexFormat(num);
        case "bcd":
            return getBcdFormat(num);
        default:
            return "meh!";
    }
}

function zeroPad(num, places) {
	let pad = "";
	for (let i = 0; i < places - num.length; i++)
		pad += "0";
	return pad+num;
}

function getDecimalFormat(num) {
	let val = num.toString();
	return zeroPad(val,2);
}

function getBinFormat(num) {
	let val = num.toString(2);
	return zeroPad(val,6);
}

function getHexFormat(num) {
	let val = num.toString(16);
	return zeroPad(val,2);
}

function getBcdFormat(num) {
	let high = (Math.floor(num / 10)).toString(2);
	let low =  (num % 10).toString(2);

	return zeroPad(high,4) + " " +zeroPad(low,4);
}

function getFormattedTime() {
	let time = new Date();
	return "It is " +
		formatNumber(time.getHours()) +
		":" +
		formatNumber(time.getMinutes()) +
		" o'clock and " +
		formatNumber(time.getSeconds()) +
		" seconds past.";
}

function tick() {
	//put your code here
}
