// npx tsc filename.ts
import Derivator from "./deriv"
import { derivative } from 'mathjs'
var startTime, endTime;
let results_own = []
let results_mod = []
const testString : string = "3*x^0-x^1+x^2-4*x^3+x^5"
const testString2 : string = "3-x^1+x^2-4*x^3+x^5"
const iterations : number[] = [10, 100, 1000]
const deriv = new Derivator();
iterations.forEach(iteration => {
    startTime = performance.now()
    for(let i = 0; i < iteration; i++){
        deriv.evaluateExpression(testString, 3)
    }
    endTime = performance.now()
    let result = endTime-startTime
    results_own.push(result)
    
})
console.log("First test finished")
iterations.forEach(iteration => {
    startTime = performance.now()
    for(let i = 0; i < iteration; i++){
        derivative(testString2, "x").evaluate({x:3})
    }
    endTime = performance.now()
    let result = endTime-startTime
    results_mod.push(result)
    console.log("result is from second: ", result)
    
})
console.log("Own is: ", results_own)
console.log("Mod is: ", results_mod)
console.log("Results are:")
iterations.forEach((val, idx) => {
    console.log(val, " ,Library function takes % of the time own does: ", results_mod[idx]/results_own[idx])
})

//console.log(testString.replace(new RegExp("x", 'g'), "1"))