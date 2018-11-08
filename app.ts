/// <reference path="utilityFunctions.ts"/>

import utils = Utility.Fees;

let fee = utils.calculateLateFee(10);
console.log(`Fee: ${fee}`);