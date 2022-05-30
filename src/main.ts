// npx tsc filename.ts
import Derivator from "./deriv"

const testString : string = "3*x^0-x^1+x^2-4*x^3+x^5"

var iterations = 10000;
console.time('Testing 10000 iterations')
const deriv = new Derivator();
for (let i = 0; i < iterations; i++){
    deriv.evaluateExpression(testString, 3)
}

console.timeEnd('Testing 10000 iterations')



//console.log(testString.replace(new RegExp("x", 'g'), "1"))