// CALCULATION OF STANDARD DEVIATION
var data = [96, 63, 85, 66, 91, 89, 77];
var sum = 0;
// Sum
for(i = 0; i < data.length; i++){
	sum = sum + data[i];
}
// Average
var average = sum / data.length;

// Variance
var preVariance = 0;
for(i = 0; i < data.length; i++){
	preVariance = preVariance + Math.pow(data[i] - average, 2);
}
var variance = preVariance / data.length;

// Standard Deviation
var preAveDev = 0;
for(i = 0; i < data.length; i++){
	preAveDev = preAveDev + Math.abs(data[i] - average);
}
var stdDev = Math.sqrt(variance);

// Avetage Deviation
var aveDev = preAveDev / data.length;

var DECIMAL_PLACE_NUM = 2;
var decPlace = Math.pow(10, DECIMAL_PLACE_NUM);

// Output
console.log("Average: " + average);
console.log("Variance: " + Math.round(variance * decPlace)/decPlace);
console.log("Average Deviation: " + Math.round(aveDev * decPlace)/decPlace);
console.log("Standard Deviation: " + Math.round(stdDev * decPlace)/decPlace);