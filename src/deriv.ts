
class Derivator {


    getSubstrings(str: string){
        let arr = []
        let subString = ""
        for (let i = 0; i < str.length; i++){
            if(str[i] == "+" || str[i] == "-"){
                arr.push(subString)
                subString = ""
            }
            subString = subString + str[i]
        }
    
        arr.push(subString)
        return arr
    }

    isolateExponent(derivString: string){
        let arr = this.getSubstrings(derivString)
        let newArr = []
        arr.forEach(a => {
            let toPush = a.split("^")
            toPush[0] = toPush[0].replace(new RegExp("x", 'g'), "1")
            newArr.push(toPush)

        })
        return newArr
    }

    evaluateExpression(derivString: string, evaluateAt: number): number{
        let twoDarr = this.isolateExponent(derivString)
        let newArr = []
        twoDarr.forEach(val => {
            if(val[0].length > 1) {
                newArr[Number(val[1])] = Number(eval(val[0]))
            } else {
                newArr[Number(val[1])] = Number(val[0])
            }
        })
        // Replace empty values
        newArr = Array.from(newArr, item => item || 0)
        return this.evaluateFormatted(evaluateAt, newArr)
    }
    // "3*x^0 -x^1+ x^2- 4*x^3 +x^5"
    evaluateFormatted(evaluateAt : number, formattedArray: number[]) : number {
        let result = 0;
        if (formattedArray.length <= 1) return 0;

        result += formattedArray[1]*(evaluateAt)
        for (let i = 2; i < formattedArray.length; i++){
            result += (formattedArray[i]*i)*(evaluateAt**(i-1))
        }
        return result;
    }

}

export default Derivator;