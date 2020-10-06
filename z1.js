// 1
const str = 'Привет'
const num = 123
const flag = true
const txt = 'true'

/* console.log(typeof str)
console.log(typeof num)
console.log(typeof flag)
console.log(typeof txt) */

//2
let a1 = 5 + 3
let a2 = 5 - 3
let a3 = 5 * 3	
let a4 = 5 / 3

/* console.log(a1)
console.log(a2)
console.log(a3)
console.log(a4) */

// 3
let a5 = 5 % 3
let a6 = 3 % 5
let a7 = 5 + '3'
let a8 = '5' - 3
let a9 = 75 + 'кг'

/* console.log(a5)
console.log(a6)
console.log(a7)
console.log(a8)
console.log(a9) */

// 4
let height = 23
let  width = 10

const s = height * width
//console.log(s)

// 5
let heightC = 10
let dC = 4

const v = ((Math.PI * Math.pow(dC,2))/4) * heightC
//console.log(v)

// 6 
let n = 3
let m = 4

let k = Math.sqrt(Math.pow(n,2) + Math.pow(m,2))
//console.log(k)

// 7
let nFib = 12
let a = (1 + Math.sqrt(5))/2
let b = (1 - Math.sqrt(5))/2

let el12 = ( Math.pow(a,nFib) - Math.pow(b,nFib) ) / Math.sqrt(5)
//console.log(Math.round(el12))

// 8
// аннуитетный
let sum = 2000000
let proc = 0.1
let years = 5

let mon = years * 12
console.log()
let i = proc/12
let koef = (i * Math.pow((1+i),mon))/(Math.pow((1+i),mon)-1)
let plat = sum * koef 
//console.log(Math.round(plat))


let sum2 = plat * mon
let perepl = sum2 - sum
//console.log(Math.round(perepl))

//дифферинцированный
const plat2 = Math.round(sum/mon)
let diffPlat = []
let sum3 = 0
let per = 12
let ostDolg = sum
for(let j=0; j<mon; j++){
	diffPlat[j] = Math.round(plat2 + (ostDolg*proc/per))
	ostDolg = Math.round(ostDolg - plat2)
	sum3 = sum3 + diffPlat[j]
	//console.log(diffPlat[j])
}
console.log(sum3)
let perepl2 = sum3 - sum
console.log(perepl2)
