
import { sum } from "../src/index.js";
if (sum(2, 3) !== 5) { throw new Error("sum test failed"); }
console.log("tests passed");
