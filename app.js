/// <reference path="utilityFunctions.ts"/>
var utils = Utility.Fees;
var fee = utils.calculateLateFee(10);
console.log("Fee: " + fee);
