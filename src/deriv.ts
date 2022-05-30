
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

    evaluateExpression(derivString: string, evaluateAt: number): void{
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
        this.evaluateFormatted(evaluateAt, newArr)
    }

    evaluateFormatted(evaluateAt : number, formattedArray: number[]) : number {
        let result = 0;
        if (formattedArray.length <= 1) return 0;

        for (let i = 1; i < formattedArray.length; i++){
            result += formattedArray[i]*(evaluateAt**i)
        }
        return result;
    }

}

export default Derivator;