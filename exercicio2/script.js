let num = +prompt("Insira um número:")
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let i in array){
    console.log(`${num} X ${array[i]} = ${num*array[i]}`)
}