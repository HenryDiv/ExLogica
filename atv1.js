// 1 - Faça um algoritmo que leia os valores de A, B, C e em seguida imprima na tela a soma entre A e B é mostre se a soma é menor que C.


// const a=5
// const b=50
// const c= 20

// const main=()=>{
//     let sum=a+b
//     if(sum<c){
//         console.log(`A soma de ${a}+${b}=${sum} é menor que c(${c})`)
//     }
//     else{
//         console.log(`A soma de ${a}+${b}=${sum} é maior que c(${c})`)

//     }
// }
// main()


// 2 - Faça um algoritmo para receber um número qualquer e imprimir na tela se o número é par ou ímpar, positivo ou negativo.

const main=()=>{
    const num=-5
    if(num%2==0 && num>=0 ){
        console.log("Numero positivo par")

    }
    if(num%2!=0 && num>=0){
        console.log("numero positivo inpar")
    }
    if(num%2==0 && num<0){
        console.log("numero negativo par")
    }
    if(num%2!=0 && num<0){
        console.log("numero negativo impar")
    }
}
main()